import React, {useContext, useState} from 'react';
import InputContext from '../../../context/input-context';
import Markdown from 'react-markdown';

let timeoutId = {update: null, save: null};
const TitlePreview = (props) => {
    const {addTransComment, editTransComment, changed} = useContext(InputContext);
    const {id, title, subReddit, upvotes} = props
    const [value, setValue] = useState(props.trans[id] ? props.trans[id].body : '' );
    const handleSaving = (e) => {
        if(timeoutId.update) clearTimeout(timeoutId.update);
        if(timeoutId.save) clearTimeout(timeoutId.save);
        timeoutId.update = setTimeout(() => {
            editTransComment(id, value);
        }, 500)
        timeoutId.save = setTimeout(() => {
            changed(true);
        }, 1500)
    }
    const parseContent = (data) => {
        let parser = new DOMParser;
        let dom = parser.parseFromString(
            '<!doctype html><body>' + data,
            'text/html');
        let decodedString = dom.body.textContent;
        return decodedString;
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleFocus = (e) => {
        addTransComment(id, 0);
        changed();
    }
    const handleBlur = (e) => {
        editTransComment(id, e.target.value);
        changed(true);
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
                <p><b>{parseContent(title)}</b></p>
                {!!props.content && <Markdown source = {parseContent(props.content)}/>}
            </div>
            <div className = "demo-input-box demo-input-box-display">
                <div className="demo-controls">
                    <span className="demo-response"></span>
                </div>
                <textarea name="textarea" id={id + '-trans'} className = "expand" onBlur = {handleBlur} onFocus = {handleFocus} value = {value} onChange = {handleChange} onKeyPress = {handleSaving}></textarea>
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
export default React.memo(TitlePreview);