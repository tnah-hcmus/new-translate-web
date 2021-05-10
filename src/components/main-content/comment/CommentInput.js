import React, {useContext, useEffect, useState} from 'react';
import InputContext from '../../../context/input-context';

let timeoutId = {update: null, save: null};
const CommentInput = (props) => {
    const handleKeyPress = (id, value, editTransComment, changed) => {
        if(timeoutId.update) clearTimeout(timeoutId.update);
        if(timeoutId.save) clearTimeout(timeoutId.save);
        timeoutId.update = setTimeout(() => {
            editTransComment(id, value);
        }, 500)
        timeoutId.save = setTimeout(() => {
            changed(true);
        }, 1500)
    }
    const handleChange = (data, setValue) => {
        setValue(data);
    }
    const handleFocus = (id, parent, addTransComment, changed) => {
        addTransComment(id, props.level, props.prefixed, parent, props.author, props.description);
        changed();
    }
    const handleBlur = (id, data, editTransComment, changed) => {
        editTransComment(id, data);
        changed(true);
    }
    return <CommentInputUI 
            rest = {props} 
            handleKeyPress = {handleKeyPress}
            handleFocus = {handleFocus}
            handleBlur = {handleBlur}
            handleChange = {handleChange}
           />
}
const CommentInputUI = (props) => {
    const {addTransComment, editTransComment, changed} = useContext(InputContext);
    const {id, parent} = props.rest.commentData;
    const [value, setValue] = useState(props.rest.preTrans || '');
    const handleKeyPress = () => {
        props.handleKeyPress(id, value, editTransComment, changed);
    }
    const handleFocus = (e) => {
        props.handleFocus(id, parent, addTransComment, changed);
    }
    const handleChange = (e) => {
        props.handleChange(e.target.value, setValue)
    }
    const handleBlur = (e) => {
        props.handleBlur(id, e.target.value, editTransComment, changed)
    }
    return (<div className = {props.rest.active ? "demo-input-box demo-input-box-display": "demo-input-box" }>
                <div className="demo-controls">
                    <span className="demo-response" id={id + '-span'}></span>
                </div>
                <textarea name="textarea" id={id + '-trans'} className = "expand" onFocus = {handleFocus} onBlur = {handleBlur} value = {value} onChange = {handleChange} onKeyPress = {handleKeyPress}></textarea>
            </div>)
}
export default React.memo(CommentInput);