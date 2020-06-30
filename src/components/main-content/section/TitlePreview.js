import React, {useContext} from 'react';
import InputContext from '../../../context/input-context';
import SectionContext from '../../../context/section-context';
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
        <div className="demo" style = {{display: "flex", flexDirection: "column"}}>
          <div className="demo-wrapper"  style = {{margin: "0"}}>
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
        {props.isImage && <img src = {props.url} style = {{margin: "0 auto"}}></img>}
        {props.isVideo && 
        <video id= {id + "-video"} className = "video" controls muted>
            <audio id= {id + "-audio"} className = "audio" controls>
                <source src={props.url + '/audio'} type="audio/mpeg"/>
            </audio>
            <source src= {props.fallbackUrl} type="video/mp4"/>
        </video>}
       </div>
    )
}
export default TitlePreview ;