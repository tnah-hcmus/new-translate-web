import React, {Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import {crawler, crawlerPopularPost} from '../../../crawler/crawler';
import SuggestPost from './SuggestPost';
import {addCategory} from '../../../actions/tabs/category_action'
import {addTab, deleteTab, updateComments, updateTab} from '../../../actions/tabs/tabs_action'
import {setCredit} from '../../../actions/credit/credit_action';
import {replaceTabID} from '../../../actions/replies/replies_action';
import CommentPreview from '../comment/CommentPreview'
const TitlePreview = lazy(() => import(/* webpackChunkName: "TitlePreview" */'./TitlePreview'));
const SectionHeader = lazy(() => import(/* webpackChunkName: "SectionHeader" */'./SectionHeader'));
const PreviewModal = lazy(() => import(/* webpackChunkName: "PreviewModal" */'../modal/PreviewModal'));
import InputContext from '../../../context/input-context';
import SectionContext from '../../../context/section-context';
import HistoryContext from '../../../context/history-context';

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
    transText: 'Đang dịch'
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
        //restore lại những comment đã được trans và nội dung trans
        this.restoreTrans().then(() =>{
                  //sau khi restore thành công comment -> restore credit
        document.getElementById(this.props.tab.id + '-credit').value = this.props.credit;
          //Kết thúc restore, hiển thị lại panel -> show comment
          document.getElementById('loading'+this.props.tab.id).classList.toggle('hide');
          document.getElementById(this.props.tab.id + 'panel').classList.toggle('shown');
        });
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
  //Nhận link bài post từ reddit -> crawl comment và data về hiển thị
  handleSubmitLink = (event) => {
    event.preventDefault();
    const link = event.target.elements.link.value.trim() + '/';
    this.setState({suggest: []})
    let regex = new RegExp("https?:\/\/(?:www\.|(?!www))reddit\.[^\s]{2,}|www\.reddit\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))reddit\.[^\s]{2,}|www\.reddit\.[^\s]{2,}|(?!www)redd.it\/[^\s]{2,}")
    if(regex.test(link))
    {
      let regex2 = new RegExp("(?!www)redd.it\/[^\s]{2,}");
      let flag = false;
      if(regex2.test(link)) {
        flag = true; 
      }
      crawler(link.replace(/\?[^?]+$/,'')).then(async (result) => {
        this.setState({
          link: flag ? result[0].link : link.replace(/\?[^?]+$/,''),
          info: result[0],
          comments: result[1]
        })
        await this.sleep(1000);
        this.savePost();
      })
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
  searchComment = (e,inp) => {
    //Kiểm tra xem trigger từ onKeyDown hay được gọi -> lấy data
    let input;
    if(e) {
      input = inp ? inp : e.target.value
    }
    else input = inp || '';
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

  //Hàm khôi phục lại những comment đã dịch trước đó và nội dung đã dịch tương ứng
  restoreTrans = async() => {
    //Nội dung đã được dịch tương ứng lưu ở this.state.trans (ở đây không lưu trữ kèm bất kỳ gì khác ngoài commentID - nội dung - tác giả - children: (tất cả các subcomment đã được dịch của comment hiện tại))
    let level = 1;
    let flag = 1;
    let authorSeparator = " || ";
    let showInput = ''; //nội dung để chèn vào thẻ input nhằm ẩn các comment chưa được dịch, chỉ hiện những comment được dịch sau khi restore
    const trans = this.state.trans;
    //Duyệt đến khi không còn phần tử nào chưa được lấy ra (flag = 0), duyệt từ level = 1 -> level n để mở các comment từ từ, nếu mở không tuần tự -> null selected
    while(flag !== 0) {
      //flag được set = 0 mỗi đầu vòng lặp, flag sẽ được tăng giá trị nếu vẫn còn phần tử thuộc trans phù hợp 
      flag = 0;
      for(let id in trans) {
        if(trans[id].level === 0) {
            document.getElementById(id + "-trans").value = trans[id].body;
          };
        // nếu đúng level cần mở hiện tại -> click vào nút comment tương ứng để expand, sau đó truyền nội dung đã được dịch vào comment đó
        if(trans[id].level === level) {
            if(trans[id].author) showInput = showInput + trans[id].prefixed + trans[id].author + authorSeparator; //thêm comment để hiện sau khi restore
            document.getElementById(id + "-trans").value = trans[id].body;
            if(trans[id].body !== '') document.getElementById(id + '-span').click(); //hiển thị comment
            document.getElementById(id + "-demo-toggle").click(); //expand comment
            flag = 1;
          };
        }
        level++; // tăng level lên mức tiếp theo khi tất cả các comment ở level hiện tại đã đc expand
    }

    //Chèn nội dung vào thanh search, ẩn các comment chưa được dịch 
    let input = document.getElementById(this.props.tab.id + '-search')
    input.value =  showInput.replace(/\ \|\|\ $/,'');
    this.searchComment(event, showInput.replace(/\ \|\|\ $/,''));
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
      }
    }
  }
  
  render() {
    return(
      <section id={this.props.tab.id + "-section"} className="section js-section">
      <SectionContext.Provider value = {{tabID: this.props.tab.id, link: this.state.link, title: this.state.info.title, upvotes: this.state.info.upvotes, subReddit: this.state.info.subReddit, id: this.state.info.id }}>
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
          previewContent = {this.previewContent}
          savePost = {this.savePost}
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
                savePost = {this.savePost}
                isVideo = {this.state.info.isVideo}
                url = {this.state.info.url}
                fallbackUrl = {this.state.info.fallbackUrl}
                isImage = {this.state.info.isImage}
           />
          </Suspense>
          </div>
          <p id={'loading'+this.props.tab.id} className = "restore" style = {{textAlign: 'center'}}>Restoring your trans comments, hold your apple...</p>
          <div className = "panel" id={this.props.tab.id+'panel'}>
          {this.state.comments.length !== 0 && <input className="demo-input-search" name="search" id = {this.props.tab.id + '-search'} aria-label="seacrh" placeholder="Để tìm các subcomment vui lòng expand comment chính, search multi-comment: ngăn cách bởi ' || '" defaultValue = {''} onChange = {this.searchComment} ></input>}
          {this.state.comments.length === 0 && <p className="widget__message">Không biết nên dịch gì? Gợi ý một số post nhé!</p>}
              {
                this.state.comments.map((rootComment, index) => (
                  <CommentPreview
                    key = {rootComment.id}
                    info = {rootComment}
                    parent = {[]}
                    tabID = {this.props.tab.id}
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
          clear = {this.clearPreview}
          />  
        </Suspense>        
      </SectionContext.Provider>
      </section>
    )
  }
}
function mapStateToProps(state) {
  return { 
    credit: state.credit
  };
}
const mapDispatchToProps = {
  addTab, deleteTab, updateTab, addCategory, updateComments, replaceTabID, setCredit
}
export default connect(mapStateToProps, mapDispatchToProps)(Section);