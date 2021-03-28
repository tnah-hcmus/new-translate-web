import axios from 'axios';
import Worker from 'worker-loader!../worker/fetcher';
import idb from '../idb/index';
class PostParser {
  standardlizeUrl = (url) => {
    url = url.trim().replace(/(\/+)$/, "");
    const regex = new RegExp("(?!www)redd.it/[^s]{2,}");
    const wwwRegex = new RegExp("https?://reddit.[^s]{2,}");
    if (wwwRegex.test(url)) url = url.replace(/reddit/, "www.reddit");
    if (regex.test(url)) {
      url = url.replace(/redd.it/, "www.reddit.com");
    }
    return url + '.json';
  };
  //Get award, max 3 award: platium -> gold -> silver -> another awards
  getAward = (data) => {
    let count = 0;
    let result = data.all_awardings.reduce((award, item) => {
      if (
        item.name === "Platinum" ||
        item.name === "Gold" ||
        item.name === "Silver"
      ) {
        count++;
        const plural = item.count > 1 ? "s" : "";
        return (award =
          award + `x${item.count} ${item.name.toLowerCase()}${plural} - `);
      } else return award;
    }, "");
    if (count < 3) {
      return data.all_awardings
        .reduce((award, item) => {
          if (
            item.name !== "Platinum" &&
            item.name !== "Gold" &&
            item.name !== "Silver" &&
            count < 3
          ) {
            count++;
            return (award =
              award +
              `x${item.count} ${
                item.name === "Press F"
                  ? "press F"
                  : item.name.toLowerCase().replace(/\(pro\)/, "pro")
              } - `);
          } else return award;
        }, result)
        .replace(/(\ \-\ )$/, "");
    } else return result.replace(/(\ \-\ )$/, "");
  };
  //Parse upvote: 11600 -> 11.6k
  upvoteParse = (upvotes) => {
    if (upvotes > 1000) {
      let first = Math.floor(upvotes / 1000);
      let second = Math.floor((upvotes - first * 1000) / 100);
      return first + "." + second + "k" + " points";
    } else
      return upvotes > 1 || upvotes < -1
        ? `${upvotes} points`
        : `${upvotes} point`;
  };
  //Get a post info except its comments
  parseInfo = (postInfo) => {
    const mediaData = postInfo.media ? postInfo.media.reddit_video : null;
    return {
      subReddit: postInfo.subreddit_name_prefixed,
      shortenLink: "https://redd.it/" + postInfo.id,
      title: postInfo.title,
      text: postInfo.selftext_html,
      awards: this.getAward(postInfo),
      author: "u/" + postInfo.author,
      upvotes: this.upvoteParse(parseInt(postInfo.ups)),
      id: postInfo.id,
      fallbackUrl: mediaData ? mediaData.fallback_url.split("?")[0] : "",
      url: postInfo.url,
      isVideo: postInfo.is_video,
      isImage:
        postInfo.post_hint === "image" || postInfo.domain === "imgur.com",
      link: "https://www.reddit.com" + postInfo.permalink,
    };
  };
  //Get a comment info
  parseComment = (commentInfo, prefix) => {
    if (commentInfo.data.author) {
      return {
        id: commentInfo.data.id,
        upvotes: this.upvoteParse(parseInt(commentInfo.data.ups)),
        author: "u/" + commentInfo.data.author,
        awards: commentInfo.data.all_awardings
          ? this.getAward(commentInfo.data)
          : "",
        parent: commentInfo.data.parent_id.slice(
          3,
          commentInfo.data.parent_id.length
        ),
        prefixed: prefix,
        content: commentInfo.data.body_html,
      };
    } else console.log(commentInfo);
  };
}

const worker =  new Worker();
let crawlListeners = {};
let updateBarCallback = null;
let id = 1;
worker.addEventListener("message", event => {
  switch (event.data.cmd) {
    case "crawl-result":
      crawlListeners[event.data.id](JSON.parse(event.data.data));
      delete crawlListeners[event.data.id];
      break;
    case "update-progress":
      if(updateBarCallback) updateBarCallback(event.data.data);
      break;
    default:
      break
  }
});
//Hàm thu thập thông tin của 1 post trả về comment (root) và info của post đó
const crawler = async (url, updateCallback) => {
  worker.postMessage({cmd: "crawl", id, data: {url}});
  updateBarCallback = updateCallback;
  const result = await new Promise(resolve => {crawlListeners[id] = resolve; id++;});
  result.db = idb;
  //await idb.createObjectStore(result.data.id, 'id');
  return result;
};

const crawlerPopularPost = async () => {
    const response = await axios.get('https://www.reddit.com/.json');
    let allPost = response.data.data.children.map((post) => {
        const helper = new PostParser;
        return helper.parseInfo(post.data);
    });
    return allPost;
}
export {crawler, crawlerPopularPost};

