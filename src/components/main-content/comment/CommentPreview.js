import React, {useState, useEffect, useContext, useRef} from 'react';
import { connect } from 'react-redux';
import CommentPanel from './CommentPanel';
import CommentInput from './CommentInput';
import {crawlReplies} from '../../../crawler/crawler';
import {addReplies, deleteReplies} from '../../../actions/replies/replies_action';
import SectionContext from '../../../context/section-context';
import InputContext from '../../../context/input-context';

const CommentPreview = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isShowComment, setShowComment] = useState(false);
  const [replies, setReplies] = useState([]);
  const {link, tabID} = useContext(SectionContext);
  const {editTransComment} = useContext(InputContext);
  const buttonShow = useRef(null);
  const checkBoxShow = useRef(null);
  useEffect(() => {
    if(props.raw_replies) {
      if(props.raw_replies[tabID]) {
        if(props.raw_replies[tabID][props.info.id]) {
          const result = [...props.raw_replies[tabID][props.info.id]];
          setReplies([...replies, ...result.map((replies, index) => (
            <CommentPreview
              key = {replies.id}
              parent = {replies.parent}
              info = {replies}
              link = {link}
              tabID = {tabID}
              raw_replies = {props.raw_replies}
              addReplies = {props.addReplies}
              savePost = {props.savePost}
              trans = {props.trans}
            />
          )) ])
        }
      }
    }
  }, [])
  const showAll = (hasContent) => {
    buttonShow.current.click();
    if(hasContent) checkBoxShow.current.click();
  }
  const saveReplies = (data) => {
    props.addReplies(tabID, props.info.id, data);
  }
  const showComment = (event) => {  
    setOpen(isOpen ? false : true);
  }
  const getReplies = () => {
    crawlReplies(link, props.info.replies, props.info.prefixed, props.parent).then((result) => {
      const newReplies = result[0].map((replies) => {
        replies.parent = [...result[1],replies.parent];
        return replies;
      })
      saveReplies(newReplies);
      setReplies([...replies, ...newReplies.map((replies, index) => (
        <CommentPreview
          key = {replies.id}
          parent = {replies.parent}
          info = {replies}
          link = {link}
          tabID = {tabID}
          raw_replies = {props.raw_replies}
          addReplies = {props.addReplies}
          savePost = {props.savePost}
          trans = {props.trans}
        />
      )) ])
    })
  }
  const showReplies = (event) => {
    const parent = event.target.parentElement;
    parent.classList.toggle('is-open');
    if(props.info.replies !== "none" && replies.length === 0) getReplies();
    setShowComment(isShowComment ? false : true);
  }
    return (
      <div className="demo" id = {props.info.id + '-comment-wrap'}>
        <div className="demo-wrapper">
        <div>
          <button id={props.info.id + "-demo-toggle"} className="js-container-target demo-toggle-button" onClick = {showReplies} ref = {buttonShow}>
            {props.info.prefixed}{props.info.author}
            <label className="checkbox-label">
              <input type="checkbox" onChange={showComment} ref = {checkBoxShow} />
              <span className="checkbox-custom rectangular" id={props.info.id + "-span"}></span>
            </label> 
              <div className="demo-meta u-avoid-clicks">{props.info.awards} {props.info.awards && <span className="demo-meta-divider">|</span>} Upvote: {props.info.upvotes}</div>
          </button>
        </div>
        <div className = {isOpen ? "content-wrapper show": "content-wrapper"}>
          <CommentPanel name = {props.info.id} content = {props.info.content} active = {isOpen}/>
          <CommentInput 
          name = {props.info.id} 
          active = {isOpen}
          parent = {props.parent}
          author = {props.info.author}
          level = {(props.info.prefixed.match(/>/g) || []).length + 1} 
          description = {` (${props.info.upvotes}${props.info.awards && ' - '}${props.info.awards})`}
          prefixed = {props.info.prefixed}
          savePost = {props.savePost}
          trans = {props.trans}
          show = {showAll}
          />
        </div>
        <div className = {!isShowComment ? 'no-display' : ''}>
          {replies}
        </div>
        </div>
      </div>
    )
};
function mapStateToProps(state, props) {
  return { 
    raw_replies: state.replies
  };
}
const mapDispatchToProps = {
  addReplies, deleteReplies
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentPreview);
