import React, {Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import {crawler, crawlerPopularPost} from '../../../crawler/crawler';
import SuggestPost from './SuggestPost';
import {addCategory} from '../../../actions/tabs/category_action'
import {addTab, deleteTab, updateComments, updateTab} from '../../../actions/tabs/tabs_action'
import {setCredit} from '../../../actions/credit/credit_action';
import {replaceTabID} from '../../../actions/replies/replies_action';
import CommentPreview from '../comment/CommentPreview';
const TitlePreview = lazy(() => import(/* webpackChunkName: "TitlePreview" */'./TitlePreview'));
const SectionHeader = lazy(() => import(/* webpackChunkName: "SectionHeader" */'./SectionHeader'));
const PreviewModal = lazy(() => import(/* webpackChunkName: "PreviewModal" */'../modal/PreviewModal'));
import InputContext from '../../../context/input-context';
import SectionContext from '../../../context/section-context';
import HistoryContext from '../../../context/history-context';
import database from '../../../firebase/firebase';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import moment from 'moment';
import PermissionModal from '../modal/PermissionModal';
import blackList from '../../../list/blackList'
//Chứa toàn bộ content của post, gồm SectionHeader (input link, bộ button helper) + Title (dùng để dịch title) + Comment (toàn bộ comment)
class Section extends React.Component {
  static contextType = HistoryContext;
  state = {
    link: '',
    info: {},
    comments: [],
    trans: {},
    content: '',
    credit: '',
    note: '',
    suggest: [],
    popover: false,
    transText: 'Đang dịch',
    search: '',
    alert: false
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  componentDidMount(){
    const present = this.context.state.present;
    //Nếu có credit
    if(this.props.credit !== '') {
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
      crawler(this.props.tab.link.replace(/\?[^?]+$/,'')).then((result) => {
        this.setState({
          comments: result[1]
        });
        this.afterRestore();
        document.getElementById('loading'+this.props.tab.id).classList.toggle('hide');
        document.getElementById(this.props.tab.id + 'panel').classList.toggle('shown');
      })
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
  crawlPost = (link, flag) => {
    crawler(link.replace(/\?[^?]+$/,'')).then(async (result) => {
      this.setState({
        link: flag ? result[0].link : link.replace(/\?[^?]+$/,''),
        info: result[0],
        comments: result[1]
      })
      await this.sleep(1000);
      if(blackList.includes(result[0].author)) {
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
        this.savePost().then(() => {
          database.ref(result[0].id).child(this.props.uuid).set({timemark: Date.now(), credit: (this.state.credit !== '') ? this.state.credit : 'Một member chăm chỉ nào đó'});
        });
      }
    });
  }
  //Nhận link bài post từ reddit -> crawl comment và data về hiển thị
  handleSubmitLink = (event) => {
    event.preventDefault();
    if(this.props.tab.link) return;
    let allowSave = false;
    let link = event.target.elements.link.value.trim() + '/';
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
      database.ref(id).once('value').then((snapshot) => {
        const result = snapshot.val();
        if(result) {
          if(result.hasOwnProperty(this.props.uuid)) {
            this.props.deleteTab(this.props.tab.id, this.props.tab.category);
            document.getElementById('button-' + id).click();
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
    this.props.setCredit(credit);
    this.setState({credit: credit});
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
        transComment[id] = {body: '', level: level, prefixed: prefixed, author: author, description: info, children: children || []};
        return {
          trans: transComment
        }
      }
      if(transComment[id].prefixed === null)
      {
        const children = transComment[id].children;
        transComment[id] = {body: '', level: level, prefixed: prefixed, children: [...children], author: author, description: info};
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
    if(this.props.uuid === "7613e4b3-b617-4ab7-8e2b-8f0b49650fa0" || this.props.uuid === "dea13dd1-cfd2-40b1-81ad-b97960a4f196") {
      database.ref(`savelocal-text/${info.id}`).once('value').then((snapshot) => {
        this.setState({content: snapshot.val().preview})
      });
      return;
    } 
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
      if(this.props.uuid === "891b984b-cb2b-4826-b286-617aef92d8df") {
        database.ref("savelocal-text").child(info.id).set({preview: content});
      }
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
  savePost = async() => {
    if(this.state.link) {
      const data = {
        id: this.state.info.id,
        title: this.state.info.title,
        info: this.state.info,
        category: this.state.info.subReddit,
        link: this.state.link,
        note: this.state.note,
        iconHref: this.props.tab.iconHref,
        trans: this.state.trans
      }
      //nếu thuộc blank category -> chuyển category
      if(this.props.tab.category === 'blank' || this.props.tab.category !== data.category) {
        this.props.addCategory(this.state.info.subReddit);
        this.props.deleteTab(this.props.tab.id, this.props.tab.category);
        this.props.replaceTabID(this.props.tab.id, data.id);
        this.props.addTab(data);
        await this.sleep(1000);
        document.getElementById('button-' + data.id).click();
      }
      else {
        const button = document.getElementById(this.props.tab.id + '-save');
        button.innerHTML = 'Saving';
        setTimeout(() => {button.innerHTML = 'Saved'}, 2000);
        setTimeout(() => {button.innerHTML = 'Save'}, 2200);
        this.props.updateTab(this.props.tab.id, data); //Nếu không, không tạo tab mới -> cập nhật lại comment, title trên tab cũ
        if(this.props.tab.id !== data.id) this.props.replaceTabID(this.props.tab.id, data.id);
        document.getElementById('button-' + data.id).click();
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
        <InputContext.Provider value = {{addTransComment: this.addTransComment, editTransComment: this.editTransComment}}>
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
          {this.state.comments.length !== 0 && <input className="demo-input-search" name="search" id = {this.props.tab.id + '-search'} aria-label="seacrh" placeholder="Để tìm các subcomment vui lòng expand comment chính, search multi-comment: ngăn cách bởi ' || '" onChange = {this.handleSearch} value = {this.state.search} ></input>}
          {this.state.comments.length === 0 && <p className="widget__message">Không biết nên dịch gì? Gợi ý một số post nhé!</p>}
              {
                this.state.comments.map((rootComment, index) => (
                  <CommentPreview
                    key = {rootComment.id}
                    info = {rootComment}
                    parent = {[]}
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
        {(this.props.tab.category === "blank") && <PermissionModal isOpen = {this.state.alert} close = {() => this.setState({alert: false})}/>}        
      </SectionContext.Provider>
      </section>
    )
  }
}
function mapStateToProps(state) {
  return { 
    credit: state.credit,
  };
}
const mapDispatchToProps = {
  addTab, deleteTab, updateTab, addCategory, updateComments, replaceTabID, setCredit
}
export default connect(mapStateToProps, mapDispatchToProps)(Section);