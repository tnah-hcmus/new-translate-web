import React, {useState, useEffect} from 'react';
import CommentPanel from './CommentPanel';
import CommentInput from './CommentInput';
import idb from '../../../idb/index';
import CheckIcon from '@material-ui/icons/Check';

const CommentPreview = (props) => {
  if(!Array.isArray(props.replies) && props.replies.replies) props.replies = props.replies.replies;
  const hasChild = props.replies && (props.replies.length !== 0);
  const [isOpen, setOpen] = useState((props.inSearch && props.trans[props.id]) ? true : !!props.openComments[props.id]);
  const [isShowComment, setShowComment] = useState((props.inSearch && props.trans[props.id]) ? true : (props.showComments[props.id] === 'undefined' ? 0 : !!props.showComments[props.id]));
  const [info, setInfo] = useState(null);
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
  const showComment = () => {
    props.updateOpenComments(props.id, !isOpen)
    setOpen(!isOpen);

  }
  const showReplies = () => {
    if(!hasChild) return;
    else {
      props.updateShowComments(props.id, isShowComment ? false : true)
      setShowComment(isShowComment ? false : true);
    }
  }
  return (info && !props.isBlank ? (
    <div className="demo" id = {props.id + '-comment-wrap'}>
      <div className="demo-wrapper">
      <div className = {isShowComment ? 'is-open' : ''}>
        <button id={props.id + "-demo-toggle"} className={"js-container-target demo-toggle-button" + (!hasChild ? " disabled-demo-button": "")} onClick = {showReplies}>
          <div 
          style = {{ display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',}}
          >
            <span style = {{width: 'auto'}}>{info.prefixed}{info.author}</span>{props.trans[props.id] && !isOpen && <CheckIcon classes = {{root: 'custom-icon'}}/>}
            <label className="checkbox-label">
            <input type="checkbox" onChange={showComment} defaultChecked = {isOpen}/>
            <span className="checkbox-custom rectangular" id={props.id + "-span"}></span>
          </label> 
          </div>
            <div className="demo-meta u-avoid-clicks">{info.awards} {info.awards && <span className="demo-meta-divider">|</span>} Upvote: {info.upvotes}</div>
        </button>
      </div>
      {
        isOpen ? (
          <div className = {"content-wrapper show"}>
            <CommentPanel name = {props.id} content = {info.content} active = {isOpen} />
            <CommentInput
              commentData = {props}
              preTrans = {props.trans[props.id]?.body}
              active = {isOpen}
              author = {info.author}
              level = {(info.prefixed.match(/>/g) || []).length + 1} 
              description = {` (${info.upvotes}${info.awards && ' - '}${info.awards})`}
              prefixed = {info.prefixed}
            />
          </div>
        ) : null
      }
      <div className = {!isShowComment ? 'no-display' : ''}>
        {(isShowComment !== 0 && props.replies && Array.isArray(props.replies)) && props.replies.map((rootComment, index) => (
          <CommentPreview
            key = {rootComment.id}
            id = {rootComment.id}
            index = {index}
            store = {props.store}
            parent = {[...props.parent, props.id]}
            inSearch = {props.inSearch}
            replies = {rootComment.replies}
            tabID = {props.tabID}
            isBlank = {props.isBlank}
            trans = {props.trans}
            showComments = {props.showComments}
            openComments = {props.openComments}
            updateOpenComments = {props.updateOpenComments}
            updateShowComments = {props.updateShowComments}
          />
        ))
        }
      </div>
      </div>
    </div>
  ) : <div style = {{height: 60.7, width: '100%'}}></div>)
};
const areEqual = (prevProps, nextProps) => {
  if(prevProps.parent.length === nextProps.parent.length && prevProps.parent.every((value, index) => value === nextProps.parent[index])) return true;
  return false;
}
export default React.memo(CommentPreview, areEqual);
