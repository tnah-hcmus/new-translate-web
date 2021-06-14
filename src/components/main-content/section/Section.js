import React, {Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import {crawler, crawlerPopularPost} from '../../../crawler/crawler';
import SuggestPost from './SuggestPost';
import {addCategoryWCloud} from '../../../actions/tabs/category_action'
import {addTab, deleteTabWCloud, updateCommentsWCloud, updateTabWCloud} from '../../../actions/tabs/tabs_action'
import {setCreditWCloud} from '../../../actions/credit/credit_action';
import {replaceTabID, addReplies} from '../../../actions/replies/replies_action';
import CommentPreview from '../comment/CommentPreview';
const TitlePreview = lazy(() => import(/* webpackChunkName: "TitlePreview" */'./TitlePreview'));
const SectionHeader = lazy(() => import(/* webpackChunkName: "SectionHeader" */'./SectionHeader'));
const PreviewModal = lazy(() => import(/* webpackChunkName: "PreviewModal" */'../modal/PreviewModal'));
import InputContext from '../../../context/input-context';
import HistoryContext from '../../../context/history-context';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import moment from 'moment';
import PermissionModal from '../modal/PermissionModal';
import blackList from '../../../list/blackList'
import warningList from '../../../list/graySubList'
import {saveDraft, getDraft} from '../../../actions/draft/draft';
import CircularProgressWithLabel from './ProgressBar';
import {CircularProgress} from '@material-ui/core';
import idb from '../../../idb/index';
import { Virtuoso } from 'react-virtuoso';

//Chứa toàn bộ content của post, gồm SectionHeader (input link, bộ button helper) + Title (dùng để dịch title) + Comment (toàn bộ comment)
class Section extends React.PureComponent {
  static contextType = HistoryContext;
  constructor(props) {
    super(props)
    this.changed = false;
    const isFull = localStorage.getItem('RVN-full');
    this.state = {
      saveState: 0,
      fullCrawl: isFull  === null ? false : isFull,
      link: this.props.tab.link || '',
      info: this.props.tab.info || {},
      isCrawling: false,
      isReady: false,
      comments: [],
      trans: this.props.tab.trans || {},
      content: '',
      credit: this.props.credit || '',
      note: this.props.tab.note || '',
      suggest: [],
      popover: false,
      transText: 'Đang dịch',
      search: '',
      inSearch: false,
      progressBarInfo: null,
      alert: false,
    }
    this.openComments = {};
    this.showComments = {};
  }

  updateOpenComments = (id, state) => {
    this.openComments[id] = state;
  }

  updateShowComments = (id, state) => {
    this.showComments[id] = state;
  }

  updateCrawl = (state) => {
    localStorage.setItem('RVN-full', state);
    this.setState({
      fullCrawl: state
    });
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  updateProgressBar = (data) => {
    this.setState({
      progressBarInfo: data
    })
  }
  reCrawl = () => {
    crawler(this.props.tab.link.replace(/\?[^?]+$/,''), this.updateProgressBar, this.state.fullCrawl)
    .then((result) => {
      this.props.addReplies(this.props.tab.id, result.replies);
      this.setState({
        comments: result.replies,
        isCrawling: false
      });
      this.tabReady(result.replies);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  componentDidMount(){
    if(this.props.tab.link) {
      //crawler lại comment (những comment chưa lưu)
      this.setState({
        isCrawling: true
      });
      this.checkPostCommentExist(this.props.tab.id, idb)
      .then((result) => {
        if(!result || !this.props.replies[this.props.tab.id] || this.props.replies[this.props.tab.id].length == 0) {
            this.reCrawl();
        } else {
          this.setState({
            comments: this.props.replies[this.props.tab.id],
            isCrawling: false
          });
          this.tabReady(this.props.replies[this.props.tab.id]);
        }
      })
      .catch((err) => {
        console.log(err);
        this.reCrawl();
      });
    }
    else{
      // nếu không có nội dung -> không restore -> không hiện loading -> hiện thẳng panel comment}
      this.setState({
        isReady: true
      })
      crawlerPopularPost()
      .then((data) => {
        this.setState({suggest: data});
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }
  checkPostCommentExist = async (id, idb) => {
    const {objectStoreNames} = await idb.getDatabaseInformation();
    return objectStoreNames.contains(id);
  }
  searchCommentIndexedDB = async (idb, storeName, searchKey, mode) => {
    if(mode == 2) {
      const searchArray = searchKey.replace('>', '').split(" || ");
      return await idb[storeName].where('author').anyOf(searchArray);
    } else {
      const searchResult = await Promise.all(searchKey.split('').map((item) => {
        return idb[storeName].where('indexed_author').equalsIgnoreCase(item);
      }));
      const fastIntersection = (arrays) => {
        // if we process the arrays from shortest to longest
        // then we will identify failure points faster, i.e. when 
        // one item is not in all arrays
        const ordered = (arrays.length === 1 ? arrays : 
          arrays.sort((a1,a2) => a1.id.length - a2.id.length));
        const shortest = ordered[0].id;
        const shortestData = ordered[0].data;
        const set = new Set(); // used for bookkeeping, Sets are faster
        const result = []; // the intersection, conversion from Set is slow
        // for each item in the shortest array
        for(let i=0;i<shortest.length;i++) {
          const item = shortest[i];
          const rawItem = shortestData[i];
          // see if item is in every subsequent array
          let every = true; // don't use ordered.every ... it is slow
          for(let j=1;j<ordered.length;j++) {
            if(ordered[j].id.includes(item)) continue;
            every = false;
            break;
          }
          // ignore if not in every other array, or if already captured
          if(!every || set.has(item)) continue;
          // otherwise, add to bookeeping set and the result
          set.add(item);
          result[result.length] = rawItem;
        }
        return result;
      }
      return fastIntersection(searchResult);
    }
  }
  fullCommentSearch = async (searchKey, mode, replies) => {
    const set = new Set();
    const master = this.props.tab.id;
    const result = await this.searchCommentIndexedDB(idb, master, searchKey, mode);
    const parentList = [];
    await Promise.all(result.map(async (item) => {
      let max = 10;
      if(!set.has(item.id)) {
        set.add(item.id);
        let parent = item;
        while((parent.parent !== master) && max > 0) {
          max--;
          const res = await idb[master].get(parent.parent);
          if(!set.has(parent.parent)) {
            parentList.push(res);
            set.add(parent.parent);
          }
          parent = res;
        }
      }
    }));
    const all = [...result, ...parentList];
    const rep = replies || this.props.replies[this.props.tab.id];
    const updated = all.filter(item => item.prefixed === "").map((item => {
      item.replies = rep.find(m => m.id == item.id);
      return item;
    }));
    return {
      data: updated,
      id: all.map(item => item.author)
    }
  }
  tabReady = (replies) => {
    const showInput = this.afterRestore();
    setTimeout(() => {
      this.setState({
        isReady: true
      });
      this.searchComment(showInput, 2, replies)
    }, 3000);

  }
  handleChanged = (autoSave) => {
    this.changed = true;
    this.clearPreview();
    if(autoSave) {
      setTimeout(() => this.savePost(), 2000);
    }
  }
  checkAuthor = (info) => {
    if(blackList.includes(info.author.toLowerCase())) {
      confirmAlert({
        title: 'Author này không cho phép dịch post trong group bạn nhé :<',
        buttons: [
            {
            label: 'Bỏ qua :-<',
            onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category, this.props.setActiveSection);}
            },
            {
            label: 'Vẫn bỏ qua :">',
            onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category, this.props.setActiveSection);}
            }
        ]
      });
    }
    else {
      this.savePost(true, {id: info.id})
    }
  }
  crawlPost = (link, flag) => {
    this.setState({
      isCrawling: true
    })
    crawler(link.replace(/\?[^?]+$/,''), this.updateProgressBar, this.state.fullCrawl).then(async (result) => {
      this.props.addReplies(this.props.tab.id, result.replies);
      this.setState({
        link: flag ? result.data.link : link.replace(/\?[^?]+$/,''),
        info: result.data,
        comments: result.replies,
        isCrawling: true
      })
      await this.sleep(1000);
      if(warningList.includes(result.data.subReddit.toLowerCase())) {
        this.setState({alert: true});
      }
      else {
        this.checkAuthor(result.data);
      }
      
    });
  }
  //Nhận link bài post từ reddit -> crawl comment và data về hiển thị
  handleSubmitLink = (event) => {
    event.preventDefault();
    if(this.props.tab.link) return;
    let allowSave = false;
    let link = event.target.elements.link.value.trim() + '/';
    let linkElement = event.target.elements.link;
    this.setState({suggest: []})
    let regex = new RegExp("https?:\/\/(?:www\.|(?!www))reddit\.[^\s]{2,}|www\.reddit\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))reddit\.[^\s]{2,}|www\.reddit\.[^\s]{2,}|(?!www)redd.it\/[^\s]{2,}");
    let wwwRegex = new RegExp("https?:\/\/reddit\.[^\s]{2,}");
    if(wwwRegex.test(link)) link = link.replace(/reddit/, 'www.reddit');
    if(regex.test(link))
    {
      let id;
      let regex2 = new RegExp("(?!www)redd.it\/[^\s]{2,}");
      let flag = false;
      if(regex2.test(link)) {
        let getIDRegex = new RegExp("redd.it\/([a-zA-z0-9]*)");
        id = link.match(getIDRegex)[1];
        flag = true; 
      }
      let getIDRegex = new RegExp("comments\/([a-zA-z0-9]*)");
      id = link.match(getIDRegex)[1];
      getDraft(id)
      .then((result) => {
        if(result) {
          if(result.hasOwnProperty(this.props.uuid)) {
            linkElement.value = '';
            this.props.setActiveSection(id);
            allowSave = true;
          }
          else {
            moment.locale('vi');
            const alert = Object.entries(result).map(([key, val]) => {
              const {timemark, credit} = val;
              const time = moment(Number(timemark)).fromNow();
              return `${credit} cách đây ${time}.`;
            });
            confirmAlert({
              title: 'Post đang được dịch mất rồi :<, dịch bởi:',
              childrenElement: () => <ul>{alert.map((draft) => {return (<li>{draft}</li>)})}</ul>,
              buttons: [
                  {
                  label: 'Bỏ qua :-<',
                  onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category, this.props.setActiveSection);}
                  },
                  {
                  label: 'Vẫn dịch :">',
                  onClick: () => {this.crawlPost(link, flag)}
                  }
              ]
            });
          }
        }
        else {
          allowSave = true;
        }
        if(allowSave) {
          this.crawlPost(link, flag);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else {
      alert('Link not valid');
      event.target.elements.link.value = '';
    }
  }

  //Xác nhận credit
  handleSubmitCredit = (event) => {
    event.preventDefault();
    const credit = event.target.elements.credit.value.trim();
    this.props.setCreditWCloud(credit);
    this.setState({credit: credit});
    saveDraft(this.state.info.id,this.props.uuid,{timemark: Date.now(), credit: (credit && credit !== '') ? credit : 'Một member chăm chỉ nào đó'});
  }

  //Lưu note
  saveNote = (note) => {
    this.setState({note});
  }
  showCommentAfterSearch = (input) => {
    let panel = document.getElementById(this.props.tab.id+'-panel');
    if(panel) {
      let wrap = panel.getElementsByClassName('demo');
      if(input === '') {
        for (let i = 0; i < wrap.length; i++) {
          wrap[i].style.display = "";
        }
        return;
      }
      if(input) {
        //Không phân biệt hoa trường
        input = input.toUpperCase();
        //Duyệt tất cả các div, nếu có tên trong input -> show, nếu không -> hide
        for (let i = 0; i < wrap.length; i++) {
          let button = wrap[i].getElementsByTagName("button")[0];
          let txtValue = button.textContent || button.innerText;
          let flag = false;
          //Tách các tên trong input phục vụ cho việc so sánh
          for(let name of input.split(' || ')) {
            if (txtValue.toUpperCase().indexOf(name) > -1) {
              flag = true;
            }
          }
          if (!flag) {
            wrap[i].style.display = "none";
          }
          else {
            //Hiển thị cả comment cha tránh việc bị display none, không hiển thị comment con
            wrap[i].style.display = "";
            parent = wrap[i].parentElement;
            while(!parent.classList.contains('panel')){
              parent.style.display = '';
              parent = parent.parentElement;
            }
          }
        } 
      }
    }
  }
  //Tìm kiếm comment
  searchComment = async (inp, mode = 0, replies) => {
    if(inp == null) {
      this.setState({
        comments: this.props.replies[this.props.tab.id],
        inSearch: false
      })
      this.showCommentAfterSearch('')
    } else if (!inp) {
      return;
    }
    else {
      this.setState({
        inSearch: true
      })
      const {data, id} = await this.fullCommentSearch(inp, mode, replies);
      this.setState({
        comments: data || []
      })
      setTimeout(() => this.showCommentAfterSearch(id.join(' || ')), 1500);
    }
  }
  handleSearch = (e) => {
    this.setState({search: e.target.value});
    if(e.target.value == '') this.searchComment(null);
  }
  //Hàm lưu trữ nội dung đã trans lại -> lưu vào mảng this.state.trans, comment được lưu trữ tạo thành cấu trúc cầu
  // 1 comments được dịch quan trọng gồm: id, level (độ sâu) ; children (tất cả các con, không quan trọng level) ; nội dung
  addTransComment = (id, level, prefixed, parent, author, info, children) => {
    //comment được truyền vào có parent -> chuyển parent này thành các thuộc tính children của các comment parent tương ứng
    let trans = this.state.trans;
    if(parent) {
      for(let i in parent) {
        if (!trans[parent[i]]) this.addTransComment(parent[i] ,parseInt(i)+1, null, parent.slice(0,parseInt(i)), null, null, [...parent.slice(parseInt(i)+1,parent.length),id]);
        else {
          if(!trans[parent[i]].children.includes(id)){
            trans[parent[i]].children.push(id)};
        } 
      }
    }
    this.setState((preState) => {
      const transComment = preState.trans;
      if(!transComment[id])
      {
        transComment[id] = {body: '', level: level, prefixed: prefixed || "", author: author || "", description: info || "", children: children || []};
        return {
          trans: transComment
        }
      }
      if(transComment[id].prefixed === null || transComment[id].prefixed === "")
      {
        const children = transComment[id].children || [];
        transComment[id] = {body: '', level: level, prefixed: prefixed || "", children: [...children], author: author || "", description: info || ""};

        return {
          trans: transComment
        }
      }
   })
  }

  //Sửa nội dung comment theo id
  editTransComment = (id, body) => {
    this.setState((preState) => {
      const transComment = preState.trans;
      if(transComment[id]) {
        preState.trans[id].body = body;
      }
      return {        
        trans: preState.trans
        }
      })
  }

  //Hàm đệ quy để quét theo thứ tự DFS các comment (đã được cấu trúc dạng cây)
  getTransReplies = (content, comments, array, level) => {
    let endLine = "\r\n";
    comments.children = comments.children || [];
    if(comments.children.length === 0) {
      if(!(comments.body.trim() === '')) content = content + comments.prefixed + comments.author + comments.description.replace(/points\ points/, 'points').replace(/point\ points/, 'point') + endLine + comments.body + endLine;
      return content;
    }
    comments.children.map((id) => {
      if(array[id].level === level) 
      content = content + endLine +  this.getTransReplies('', array[id], array, level+1);
    })
    if(!(comments.body.trim() === '')) content = comments.prefixed+ comments.author + comments.description.replace(/points\ points/, 'points').replace(/point\ points/, 'point')  + endLine + comments.body + endLine + content;
    return content;
  }

  //preview content theo format
  previewContent = () => {
    let commentSeparator = "_____________________"+"\r\n";
    let endLine = "\r\n";
    let info = this.state.info;
    let trans = this.state.trans;
    if(info.id) {
      //tạo content theo format
      let content = info.subReddit + endLine + info.author + ` (${info.upvotes}${info.awards && ' - '}${info.awards}) ` + endLine;
      let first = trans[info.id] || null;
      if (first)  content = content + first.body + endLine + commentSeparator
      else {content = content + commentSeparator};
      content = content + 'Link Reddit: '+ info.shortenLink + endLine + commentSeparator + endLine;
      //DFS trans comment
      for(let id in trans) {
        if(trans[id].level === 1) {
          let deep = this.getTransReplies('', trans[id], trans, 2);
          if(deep.trim() !== '') content = content + deep + commentSeparator + endLine;
        }
      }
      content = content.replace(/\r\n$/,'');
      //Thêm note và credit
      if(this.state.note !== '') content = content + this.state.note + endLine + commentSeparator;
      content = content + `Dịch bởi ${this.state.credit || 'một member chăm chỉ dịch bài'}` + endLine + 'Edited by https://translate-rvn.web.app/';
      this.setState({
        content: content.replace(/\r\n\r\n\r\n/g,"\r\n\r\n").replace(/\r\n\r\n_/,"\r\n")
      });
    }
  }

  //Xóa thông tin preview
  clearPreview = () => {
    this.setState({content: ''});
  }

  //Hàm showSearch
  afterRestore = () => {
    let authorSeparator = " || ";
    let showInput = ''; //nội dung để chèn vào thẻ input nhằm ẩn các comment chưa được dịch, chỉ hiện những comment được dịch sau khi restore
    const trans = this.state.trans;
    for(let id in trans) {
      if(trans[id].author && trans[id].level > 0) showInput = showInput + trans[id].prefixed + trans[id].author + authorSeparator; //thêm comment để hiện sau khi restore
    }
    showInput = showInput.replace(/\ \|\|\ $/,'')
    //Chèn nội dung vào thanh search, ẩn các comment chưa được dịch 
    this.setState({search: showInput});
    return showInput;
  }

  //Lưu thông tin về post và nội dung các comment đã được dịch lại -> tabInfo -> lưu vào store
  savePost = (first, input = {}) => {
    if(!this.changed && !first) return;
    const updateState = (status) => {
      this.setState({
        saveState: status
      });
    }
    let id = input.id || this.props.tab.id;
    const uuid = input.uuid || this.props.uuid;
    const saveData = input.data || {timemark: Date.now(), credit: (this.state.credit && this.state.credit !== '') ? this.state.credit : 'Một member chăm chỉ nào đó'};
    updateState(1);
    this.changed = false; 
    if(this.state.link) {
      const data = {
        id: this.state.info.id,
        title: this.state.info.title,
        info: this.state.info,
        category: this.state.info.subReddit,
        link: this.state.link,
        note: this.state.note,
        iconHref: this.props.tab.iconHref,
        trans: this.state.trans || {}
      }
      id = input.id || data.id;
      if(Object.keys(data.trans).length === 0) {
        data.trans[data.id] = ""
      }
      //nếu thuộc blank category -> chuyển category
      if(this.props.tab.category === 'blank' || this.props.tab.category !== data.category) {
        this.props.addCategory(this.state.info.subReddit);
        this.props.addTab(data);
        this.props.replaceTabID(this.props.tab.id, data.id);
        this.props.deleteTab(this.props.tab.id, this.props.tab.category, this.props.setActiveSection, data.id);
      }
      else {
        this.props.updateTab(this.props.tab.id, data); //Nếu không, không tạo tab mới -> cập nhật lại comment, title trên tab cũ
        if(this.props.tab.id !== data.id) this.props.replaceTabID(this.props.tab.id, data.id);
        this.props.setActiveSection(data.id)
      }
    }
    saveDraft(id, uuid, saveData)
    .then(() => {
      updateState(2);
      setTimeout(() => updateState(0), 2000)
    })
    .catch((err) => console.log(err))
  }
  //show alert
  showAlert = () => {
    this.setState({alert: false}); 
    this.checkAuthor(this.state.info)
  }
  
  render() {
    return(
      <section className= {"section js-section " + (this.props.activeSection === this.props.tab.id ? "is-shown" : "")}>
      <Suspense fallback = {<div></div>} key = {this.props.tab.id + '-header-suspense'}>
        <SectionHeader
          key = {this.props.tab.id + '-header'}
          fullCrawl = {this.state.fullCrawl}
          updateCrawl = {this.updateCrawl}
          category = {this.props.tab.category}
          iconHref = {this.props.tab.iconHref}
          isVideo = {this.state.info.isVideo}
          setActiveSection = {this.props.setActiveSection}
          url = {this.state.info.url}
          fallbackUrl = {this.state.info.fallbackUrl}
          isImage = {this.state.info.isImage}
          saveState = {this.state.saveState}
          credit = {this.state.credit}
          helper = {this.props.helper}
          setGoogleHelper = {this.props.setGoogleHelper}
          setHelper = {this.props.setHelper}
          previewContent = {this.previewContent}
          saveNote = {this.saveNote}
          handleSubmitLink = {this.handleSubmitLink}
          handleSubmitCredit = {this.handleSubmitCredit}
          tabID = {this.props.tab.id}
          link = {this.state.link}
          title = {this.state.info.title}
          subReddit = {this.state.info.subReddit}
          upvotes = {this.state.info.upvotes}
          id = {this.state.info.id}
          uuid = {this.props.uuid}
          savePost = {this.savePost}
        />
      </Suspense>
        <InputContext.Provider value = {{addTransComment: this.addTransComment, editTransComment: this.editTransComment, changed: this.handleChanged}}>
          <div className = {this.state.info.id ? "title-panel shown" : "title-panel hide"}>
          <Suspense fallback = {<div></div>} key = {this.state.info.id + '-title-suspense'}>
            <TitlePreview
                key = {this.state.info.id + '-title'}
                author = {this.state.info.author}
                awards = {this.state.info.awards}
                content = {this.state.info.text}
                isVideo = {this.state.info.isVideo}
                url = {this.state.info.url}
                fallbackUrl = {this.state.info.fallbackUrl}
                isImage = {this.state.info.isImage}
                trans = {this.state.trans}
                title = {this.state.info.title}
                subReddit = {this.state.info.subReddit}
                upvotes = {this.state.info.upvotes}
                id = {this.state.info.id}
            />
          </Suspense>
          </div>
          <p className = {"restore" + (this.state.isReady ? ' hide' : '')} style = {{textAlign: 'center'}}>Restoring your trans comments, hold your apple...</p>
          <div id={this.props.tab.id+'-panel'} className = {"panel" + (this.state.isReady ? ' shown' : '')}>
          {(this.state.comments.length !== 0 || this.state.inSearch) ? (
            <div style = {{display: 'flex'}}>
              <input 
              className="demo-input-search" 
              name="search" 
              id = {this.props.tab.id + '-search'} 
              aria-label="seacrh" 
              placeholder="Tìm kiếm comment" 
              onChange = {this.handleSearch} 
              value = {this.state.search} ></input>
              <button className="demo-button" onClick = {() => this.searchComment(this.state.search)}>Search</button>
            </div>
          )
           : (<div className = "progress">
                {(!this.state.isCrawling ? 
                  (<p className="widget__message">Không biết nên dịch gì? Gợi ý một số post nhé!</p>) : 
                  (this.state.progressBarInfo === null ? <CircularProgress style = {{color: 'var(--color-accent)'}}/> : <CircularProgressWithLabel value = {this.state.progressBarInfo}/>)
                )}
              </div>)
          }
          {
            this.state.inSearch ? (
              this.state.comments.map((rootComment) => 
                <CommentPreview
                  key = {rootComment.id}
                  id = {rootComment.id}
                  inSearch = {this.state.inSearch}
                  openComments = {this.openComments}
                  updateOpenComments = {this.updateOpenComments}
                  showComments = {this.showComments}
                  updateShowComments = {this.updateShowComments}
                  parent = {[]}
                  replies = {rootComment.replies}
                  tabID = {this.props.tab.id}
                  isBlank = {this.props.tab.category === "blank"}
                  trans = {this.state.trans}
                />
              )
            ) :
            (<Virtuoso
              style = {{height: '800px', marginTop: '30px'}}
              data={this.state.comments || []}
              itemContent={(index, rootComment) => (
                    <CommentPreview
                      key = {rootComment.id}
                      id = {rootComment.id}
                      inSearch = {this.state.inSearch}
                      openComments = {this.openComments}
                      updateOpenComments = {this.updateOpenComments}
                      showComments = {this.showComments}
                      updateShowComments = {this.updateShowComments}
                      parent = {[]}
                      replies = {rootComment.replies}
                      tabID = {this.props.tab.id}
                      isBlank = {this.props.tab.category === "blank"}
                      trans = {this.state.trans}
                    />
                )}
            />)
          }
          </div>
        </InputContext.Provider>
        {
          this.state.suggest.map((post, i) => (
            <SuggestPost
              key = {i}
              subReddit = {post.subReddit}
              awards = {post.awards}
              shortenLink = {post.shortenLink}
              upvotes = {post.upvotes}
              author = {post.author}
              title = {post.title}
            />)) 
        }
        <Suspense fallback = {<div></div>} key = {this.state.info.id + '-modal-suspense'}>
          <PreviewModal
          key = {this.state.info.id + '-modal'}
          isOpen = {!!this.state.content} 
          content = {this.state.content}
          id = {this.props.tab.id}
          clear = {this.clearPreview}
          />  
        </Suspense>
        {(this.props.tab.category === "blank") && <PermissionModal author = {this.state.info.author} isOpen = {this.state.alert} close = {this.showAlert}/>}        
      </section>
    )
  }
}
function mapStateToProps(state) {
  return { 
    credit: state.credit,
    uuid: state.auth.uid,
    replies: state.replies
  };
}
const mapDispatchToProps = {
  addTab, deleteTab: deleteTabWCloud, updateTab: updateTabWCloud, addCategory: addCategoryWCloud, updateComments: updateCommentsWCloud, replaceTabID, addReplies, setCreditWCloud
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Section));