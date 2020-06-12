import axios from 'axios';

//Format ký tự đặc biệt
const parseContent = (data) => {
    let parser = new DOMParser;
    let dom = parser.parseFromString(
        '<!doctype html><body>' + data,
        'text/html');
    let decodedString = dom.body.textContent;
    return decodedString;
}

// lấy award, max 3 award: ưu tiên platium -> gold -> silver -> awards miền núi
const getAward = (data) => {
    let count = 0;
    let result = data.all_awardings.reduce((award, item) => {
        if(item.name === 'Platinum' ||item.name === 'Gold' ||item.name === 'Silver' ) {
            count++;
            let plural = (item.count > 1) ? 's' : '';
            return award = award + `x${item.count} ${item.name.toLowerCase()}${plural} - `;
        }
        else return award;
    },'');
    if(count < 3) {
        return data.all_awardings.reduce((award, item) => {
            if(item.name !== 'Platinum' && item.name !== 'Gold' && item.name !== 'Silver' && count < 3) {
                count++
                return award = award + `x${item.count} ${item.name === 'Press F' ? 'press F' : item.name.toLowerCase().replace(/\(pro\)/, 'pro')} - `;
            }
            else return award;
        },result).replace(/(\ \-\ )$/, '');
    }
    else return result.replace(/(\ \-\ )$/, '');
}

//Parse upvote: 11600 -> 11.6k
const upvoteParse = (upvotes) => {
    if(upvotes > 1000) {
        let first = Math.floor(upvotes/1000);
        let second =  Math.floor((upvotes-first*1000)/100);
        return first + '.' + second + 'k' + ' points';
    }
    else return ((upvotes > 1 || upvotes < -1) ? `${upvotes} points` : `${upvotes} point`);
}

//Simplify info trong json -> object cơ bản
const parseInfo = (postInfo) => {
    const mediaData = postInfo.media ? postInfo.media.reddit_video : null;
    return {
        "subReddit": postInfo.subreddit_name_prefixed,
        "shortenLink":'https://redd.it/' + postInfo.id,
        "title": parseContent(postInfo.title),
        "text": postInfo.selftext,
        "awards" : parseContent(getAward(postInfo)),
        "author" : 'u/' + postInfo.author,
        "upvotes" : upvoteParse(parseInt(postInfo.ups)),
        "id" : postInfo.id,
        "fallbackUrl": mediaData ? mediaData.fallback_url.split('?')[0] : '',
        "url": postInfo.url,
        "isVideo": postInfo.is_video
    };
}

//Simplify comment trong json -> object cơ bản, không lưu trữ tất cả replies, chỉ lưu lại id_comment (getReplies khi cần thiết)
const parseComment = (comments, prefixed) => {
    if(comments)
    {
        const allComments =  Array.prototype.map.call(comments, (item) => {
            if(item.data.author) {
                return {
                    "id": item.data.id,
                    "upvotes" : upvoteParse(parseInt(item.data.ups)),
                    "author" : 'u/' + item.data.author,
                    "awards" : item.data.all_awardings ? parseContent(getAward(item.data)) : '',
                    "parent": item.data.parent_id.slice(3,item.data.parent_id.length),
                    "prefixed": prefixed,
                    "content": item.data.body,
                    "replies": (item.data.replies !== "") ? '/'+item.data.id : "none"
                }
            }
        });
        return allComments.filter((comment) => !!comment );
    }
}

//Hàm thu thập replies của 1 comment
const crawlReplies = async (url, idComment, prefixed, parent) => {
    const response = await axios.get(url.replace(/(\/+)$/,'') +idComment+'.json');
    let allReplies = response.data[1].data.children[0].data.replies.data.children || null;
    if (allReplies === null) return idComment;
    return [parseComment(allReplies, prefixed + '>'), parent];
};

//Hàm thu thập thông tin của 1 post trả về comment (root) và info của post đó
const crawler = async (url) => {
    const response = await axios.get(url.replace(/(\/+)$/,'') + '.json');
    let postInfo = response.data[0].data.children[0].data;
    let allComments = response.data[1].data.children;
    return [parseInfo(postInfo), parseComment(allComments, '')];
};
export {crawler, crawlReplies};

