import React, {useContext} from 'react';
import InputContext from '../context/input-context';
import SectionContext from '../context/section-context';
import Markdown from 'react-markdown';

const TitlePreview = (props) => {
    const {addTransComment, editTransComment} = useContext(InputContext);
    const {id, title, subReddit, upvotes} = useContext(SectionContext);
    const parseContent = () => {
        let parser = new DOMParser;
        let dom = parser.parseFromString(
            '<!doctype html><body>' + props.content,
            'text/html');
        let decodedString = dom.body.textContent;
        return decodedString;
    }
    const handleKeyDown = (e) => {
        e.target.style.height = '100%';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    const handleFocus = (e) => {
        addTransComment(id, 0);
    }
    const handleBlur = (e) => {
        editTransComment(id, e.target.value);
        props.savePost();
    }
    return (
        <div className="demo">
          <div className="demo-wrapper">
          <div className = "title-wrapper">
            <p>{subReddit}</p>
            {props.author}
            <div className="demo-meta u-avoid-clicks">{props.awards} {props.awards && <span className="demo-meta-divider">|</span>} Upvote: {upvotes}</div>
          </div>
          <div className = "content-wrapper show">
            <div className = "demo-box demo-box-display">
                <div className="demo-controls">
                    <span className="demo-response"></span>
                </div>
                <p><b>{title}</b></p>
                {!!props.content && <Markdown source = {parseContent(props.content)}/>}
            </div>
            <div className = "demo-input-box demo-input-box-display">
                <div className="demo-controls">
                    <span className="demo-response"></span>
                </div>
                <textarea name="textarea" id={id + '-trans'} className = "expand" onKeyDown={handleKeyDown} onBlur = {handleBlur} onFocus = {handleFocus}></textarea>
            </div>
          </div>
        </div>
       </div>
    )
}
export default TitlePreview ;