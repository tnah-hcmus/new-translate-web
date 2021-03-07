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
import SectionContext from '../../../context/section-context';
import HistoryContext from '../../../context/history-context';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {isEqual} from 'lodash';
import moment from 'moment';
import PermissionModal from '../modal/PermissionModal';
import blackList from '../../../list/blackList'
import warningList from '../../../list/graySubList'
import {saveDraft, getDraft} from '../../../actions/draft/draft';
import CircularProgressWithLabel from './ProgressBar';
import {CircularProgress} from '@material-ui/core';
import IDBWrapper from '../../../idb/index';

//Chứa toàn bộ content của post, gồm SectionHeader (input link, bộ button helper) + Title (dùng để dịch title) + Comment (toàn bộ comment)
class Section extends React.Component {
  static contextType = HistoryContext;
  changed = false;
  state = {
    link: '',
    info: {},
    isCrawling: false,
    store: null,
    comments: [],
    trans: {},
    content: '',
    credit: '',
    note: '',
    suggest: [],
    popover: false,
    transText: 'Đang dịch',
    search: '',
    progressBarInfo: null,
    alert: false
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  updateProgressBar = (data) => {
    this.setState({
      progressBarInfo: data
    })
  }
  componentDidMount(){
    const present = this.context.state.present;
    //Nếu có credit
    if(this.props.credit && this.props.credit !== '') {
      this.setState({credit: this.props.credit});
    }
    //Nếu trước đó có nội dung -> restore nội dung thông tin
    if(this.props.tab.link) {
        this.setState({
        link: this.props.tab.link,
        info: this.props.tab.info,
        trans: this.props.tab.trans,
        note: this.props.tab.note
      });
      //crawler lại comment (những comment chưa lưu)
      this.setState({
        isCrawling: true
      });
      const idb = new IDBWrapper('reddit-post');
      this.checkPostCommentExist(this.props.tab.id, idb).then((result) => {
        if(!result || !this.props.replies[this.props.tab.id]) {
          crawler(this.props.tab.link.replace(/\?[^?]+$/,''), this.updateProgressBar).then((result) => {
            this.props.addReplies(this.props.tab.id, result.replies);
            this.setState({
              store: result.db[result.data.id],
              comments: result.replies,
              isCrawling: false
            });
            this.tabReady();
          })
        } else {
          idb.openCollection(this.props.tab.id, "id").then(() => {
            this.setState({
              store: idb[this.props.tab.id],
              comments: this.props.replies[this.props.tab.id],
              isCrawling: false
            });
            this.tabReady();
          })
        }
      });
    }
    else{
      // nếu không có nội dung -> không restore -> không hiện loading -> hiện thẳng panel comment}
      document.getElementById('loading'+this.props.tab.id).classList.toggle('hide');
      document.getElementById(this.props.tab.id + 'panel').classList.toggle('shown');
      crawlerPopularPost().then((data) => {
        this.setState({suggest: data});
      })
    };
    if(present === this.props.tab.id) document.getElementById(this.props.tab.id + "-section").classList.add('is-shown');
  }
  componentDidUpdate() {
    if(this.props.credit && this.props.credit !== this.state.credit) {
      this.setState({credit: this.props.credit});
      saveDraft(this.state.info.id,this.props.uuid,{timemark: Date.now(), credit: (this.props.credit && this.props.credit !== '') ? this.props.credit : 'Một member chăm chỉ nào đó'});
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(isEqual(nextProps, this.props) && isEqual(nextState, this.state)) return false;
    else return true;
  }
  checkPostCommentExist = async (id, idb) => {
    const {objectStoreNames} = await idb.getDatabaseInformation();
    return objectStoreNames.contains(id);
  }
  tabReady = () => {
    this.afterRestore();
    setInterval(() => this.savePost(), 60000);
    document.getElementById('loading'+this.props.tab.id).classList.toggle('hide');
    document.getElementById(this.props.tab.id + 'panel').classList.toggle('shown');
  }
  handleChanged = () => {
    this.changed = true;
  }
  checkAuthor = (info) => {
    if(blackList.includes(info.author.toLowerCase())) {
      confirmAlert({
        title: 'Author này không cho phép dịch post trong group bạn nhé :<',
        buttons: [
            {
            label: 'Bỏ qua :-<',
            onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category);}
            },
            {
            label: 'Vẫn bỏ qua :">',
            onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category);}
            }
        ]
      });
    }
    else {
      this.savePost(true).then(() => {
        saveDraft(info.id,this.props.uuid,{timemark: Date.now(), credit: (this.state.credit && this.state.credit !== '') ? this.state.credit : 'Một member chăm chỉ nào đó'})
      });
    }
  }
  crawlPost = (link, flag) => {
    this.setState({
      isCrawling: true
    })
    crawler(link.replace(/\?[^?]+$/,''), this.updateProgressBar).then(async (result) => {
      this.props.addReplies(this.props.tab.id, result.replies);
      this.setState({
        link: flag ? result.data.link : link.replace(/\?[^?]+$/,''),
        info: result.data,
        comments: result.replies,
        store: result.db[result.data.id],
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
      getDraft(id).then((result) => {
        if(result) {
          if(result.hasOwnProperty(this.props.uuid)) {
            linkElement.value = '';
            const button = document.getElementById('button-' + id);
            if(button) button.click()
            else allowSave = true;
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
                  onClick: () =>  {this.props.deleteTab(this.props.tab.id, this.props.tab.category);}
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
  saveNote = () => {
    let note = document.getElementById(this.props.tab.id+ '-note-input').value
    this.setState({note: note});
  }
  //Tìm kiếm comment
  searchComment = (inp) => {
    //Kiểm tra xem trigger từ onKeyDown hay được gọi -> lấy data
    let input = inp || '';
    //Lấy ra tất cả các div comments
    let panel = document.getElementById(this.props.tab.id+'panel');
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
          //Hiển thị cả comment cha tránh việc bị display none nè, không hiển thị comment anh em
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
  handleSearch = (e) => {
    this.setState({search: e.target.value});
    this.searchComment(e.target.value);
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
        this.setState({content: ''});
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
      content = content + `Dịch bởi ${this.state.credit || 'một member chăm chỉ dịch bài'}` + endLine + 'Edited by https://rvnweb.site';
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
    //Chèn nội dung vào thanh search, ẩn các comment chưa được dịch 
    this.setState({search: showInput.replace(/\ \|\|\ $/,'')});
    this.searchComment(showInput.replace(/\ \|\|\ $/,''));
  }

  //Lưu thông tin về post và nội dung các comment đã được dịch lại -> tabInfo -> lưu vào store
  savePost = async(first) => {
    if(!this.changed && !first) return;
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
      if(Object.keys(data.trans).length === 0) {
        data.trans[data.id] = ""
      }
      //nếu thuộc blank category -> chuyển category
      if(this.props.tab.category === 'blank' || this.props.tab.category !== data.category) {
        this.props.addCategory(this.state.info.subReddit);
        this.props.deleteTab(this.props.tab.id, this.props.tab.category);
        this.props.replaceTabID(this.props.tab.id, data.id);
        this.props.addTab(data);
        await this.sleep(1000);
        const button = document.getElementById('button-' + data.id)
        if(button) button.click()
        else setTimeout(() => document.getElementById('button-' + data.id), 1000);
      }
      else {
        const button = document.getElementById(this.props.tab.id + '-save');
        button.innerHTML = 'Saving';
        setTimeout(() => {button.innerHTML = 'Saved'}, 2000);
        setTimeout(() => {button.innerHTML = 'Save'}, 2200);
        this.props.updateTab(this.props.tab.id, data); //Nếu không, không tạo tab mới -> cập nhật lại comment, title trên tab cũ
        if(this.props.tab.id !== data.id) this.props.replaceTabID(this.props.tab.id, data.id);
        const button2 = document.getElementById('button-' + data.id)
        if(button2) button2.click()
        else setTimeout(() => document.getElementById('button-' + data.id), 1000);
      }
    }
  }
  
  render() {
    return(
      <section id={this.props.tab.id + "-section"} className="section js-section">
      <SectionContext.Provider value = {{tabID: this.props.tab.id, link: this.state.link, title: this.state.info.title, upvotes: this.state.info.upvotes, subReddit: this.state.info.subReddit, id: this.state.info.id, savePost: this.savePost, uuid: this.props.uuid, credit: this.state.credit }}>
      <Suspense fallback = {<div></div>} key = {this.props.tab.id + '-header-suspense'}>
        <SectionHeader
          key = {this.props.tab.id + '-header'}
          category = {this.props.tab.category}
          iconHref = {this.props.tab.iconHref}
          isVideo = {this.state.info.isVideo}
          url = {this.state.info.url}
          fallbackUrl = {this.state.info.fallbackUrl}
          isImage = {this.state.info.isImage}
          credit = {this.state.credit}
          helper = {this.props.helper}
          setGoogleHelper = {this.props.setGoogleHelper}
          setHelper = {this.props.setHelper}
          previewContent = {this.previewContent}
          saveNote = {this.saveNote}
          handleSubmitLink = {this.handleSubmitLink}
          handleSubmitCredit = {this.handleSubmitCredit}
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
           />
          </Suspense>
          </div>
          <p id={'loading'+this.props.tab.id} className = "restore" style = {{textAlign: 'center'}}>Restoring your trans comments, hold your apple...</p>
          <div className = "panel" id={this.props.tab.id+'panel'}>
          {this.state.comments.length !== 0 ? (<input className="demo-input-search" name="search" id = {this.props.tab.id + '-search'} aria-label="seacrh" placeholder="Để tìm các subcomment vui lòng expand comment chính, search multi-comment: ngăn cách bởi ' || '" onChange = {this.handleSearch} value = {this.state.search} ></input>)
           : (<div className = "progress">
                {(!this.state.isCrawling ? 
                  (<p className="widget__message">Không biết nên dịch gì? Gợi ý một số post nhé!</p>) : 
                  (this.state.progressBarInfo === null ? <CircularProgress color = "primary"/> : <CircularProgressWithLabel value = {this.state.progressBarInfo}/>)
                )}
              </div>)
          }
              {
                this.state.comments.map((rootComment, index) => (
                  <CommentPreview
                    key = {rootComment.id}
                    id = {rootComment.id}
                    store = {this.state.store}
                    parent = {[]}
                    replies = {rootComment.replies}
                    tabID = {this.props.tab.id}
                    trans = {this.state.trans}
                    savePost = {this.savePost}
                  />
                ))
              }
          </div>
        </InputContext.Provider>
        {
          this.state.suggest.map((post) => (
            <SuggestPost
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
        {(this.props.tab.category === "blank") && <PermissionModal author = {this.state.info.author} isOpen = {this.state.alert} close = {() => {this.setState({alert: false}); this.checkAuthor(this.state.info)}}/>}        
      </SectionContext.Provider>
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
export default connect(mapStateToProps, mapDispatchToProps)(Section);