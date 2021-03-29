import React, {useState, useEffect ,useRef} from 'react';
import CommentPanel from './CommentPanel';
import CommentInput from './CommentInput';
import idb from '../../../idb/index';

const CommentPreview = (props) => {
  const hasChild = props.replies && (props.replies.length !== 0);
  const [isOpen, setOpen] = useState(false);
  const [isShowComment, setShowComment] = useState(false);
  const [info, setInfo] = useState(null);
  const buttonShow = useRef(null);
  const checkBoxShow = useRef(null);
  useEffect(() => {
    let isComponentExist = true;
    if(!props.isBlank) {
      const store = idb[props.tabID];
      store.get(props.id)
      .then((data) => {
        if(isComponentExist) setInfo(data);
      })
      .catch((err) => {
        console.log(err);
        setInfo({
          author: 'Có lỗi xảy ra trong quá trình tạo comment'
        });
      });
    }
    return () => isComponentExist = false;
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
    return (info && !props.isBlank ? (
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
        {
          isOpen ? (
            <div className = {"content-wrapper show"}>
              <CommentPanel name = {props.id} content = {info.content} active = {isOpen} />
              <CommentInput
                commentData = {props}
                active = {isOpen}
                author = {info.author}
                level = {(info.prefixed.match(/>/g) || []).length + 1} 
                description = {` (${info.upvotes}${info.awards && ' - '}${info.awards})`}
                prefixed = {info.prefixed}
                show = {showAll}
              />
            </div>
          ) : null
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
                    isBlank = {props.isBlank}
                    trans = {props.trans}
                    savePost = {props.savePost}
                  />
                ))
          }
        </div>
        </div>
      </div>
    ) : null)
};
const areEqual = (prevProps, nextProps) => {
  if(prevProps.parent.length === nextProps.parent.length && prevProps.parent.every((value, index) => value === nextProps.parent[index])) return true;
  return false;
}
export default React.memo(CommentPreview, areEqual);
