import React, {useState, useEffect ,useRef} from 'react';
import CommentPanel from './CommentPanel';
import CommentInput from './CommentInput';
import LazyLoad from 'react-lazyload'

const CommentPreview = (props) => {
  const hasChild = props.replies && (props.replies.length !== 0);
  const [isOpen, setOpen] = useState(false);
  const [isShowComment, setShowComment] = useState(false);
  const [info, setInfo] = useState(null);
  const buttonShow = useRef(null);
  const checkBoxShow = useRef(null);
  useEffect(() => {
    props.store.get(props.id).then((data) => {
      setInfo(data);
    });
  }, [])
  const showAll = (hasContent) => {
    buttonShow.current.click();
    if(hasContent) checkBoxShow.current.click();
  }
  const showComment = () => {  
    setOpen(isOpen ? false : true);
  }
  const showReplies = (event) => {
    const parent = event.target.parentElement;
    parent.classList.toggle('is-open');
    setShowComment(isShowComment ? false : true);
  }
    return (info ? (
      <div className="demo" id = {props.id + '-comment-wrap'}>
        <div className="demo-wrapper">
        <div>
          <button id={props.id + "-demo-toggle"} className="js-container-target demo-toggle-button" onClick = {showReplies} ref = {buttonShow} disabled = {!hasChild}>
            {info.prefixed}{info.author}
            <label className="checkbox-label">
              <input type="checkbox" onChange={showComment} ref = {checkBoxShow} />
              <span className="checkbox-custom rectangular" id={props.id + "-span"}></span>
            </label> 
              <div className="demo-meta u-avoid-clicks">{info.awards} {info.awards && <span className="demo-meta-divider">|</span>} Upvote: {info.upvotes}</div>
          </button>
        </div>
        <div className = {isOpen ? "content-wrapper show": "content-wrapper"}>
          <CommentPanel name = {props.id} content = {info.content} active = {isOpen} />
          <CommentInput 
          name = {props.id} 
          active = {isOpen}
          parent = {props.parent}
          author = {info.author}
          level = {(info.prefixed.match(/>/g) || []).length + 1} 
          description = {` (${info.upvotes}${info.awards && ' - '}${info.awards})`}
          prefixed = {info.prefixed}
          savePost = {props.savePost}
          trans = {props.trans}
          show = {showAll}
          />
        </div>
        {
          
        }
        <div className = {!isShowComment ? 'no-display' : ''}>
          {isShowComment && props.replies.map((rootComment, index) => (
                  <CommentPreview
                    key = {rootComment.id}
                    id = {rootComment.id}
                    store = {props.store}
                    parent = {[...props.parent, props.id]}
                    replies = {rootComment.replies}
                    tabID = {props.tabID}
                    trans = {props.trans}
                    savePost = {props.savePost}
                  />
                ))
          }
        </div>
        </div>
      </div>
    ) : (<p>Loading</p>))
};
export default CommentPreview;
