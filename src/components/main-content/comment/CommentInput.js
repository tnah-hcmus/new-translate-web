import React, {useContext, useEffect, useState} from 'react';
import InputContext from '../../../context/input-context';

let timeoutId = {update: null, save: null};
const CommentInput = (props) => {
    const {addTransComment, editTransComment, changed} = useContext(InputContext);
    const {id: name, parent} = props.commentData;
    const [value, setValue] = useState(props.preTrans || '');
    const handleSaving = (e) => {
        if(timeoutId.update) clearTimeout(timeoutId.update);
        if(timeoutId.save) clearTimeout(timeoutId.save);
        timeoutId.update = setTimeout(() => {
            editTransComment(name, value);
        }, 500)
        timeoutId.save = setTimeout(() => {
            changed(true);
        }, 1500)
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleFocus = (e) => {
        addTransComment(name, props.level, props.prefixed, parent, props.author, props.description);
        changed();
    }
    const handleBlur = (e) => {
        editTransComment(name, e.target.value);
        changed(true);
    }
    return (
        <div className = {props.active ? "demo-input-box demo-input-box-display": "demo-input-box" }>
            <div className="demo-controls">
                <span className="demo-response" id={name + '-span'}></span>
            </div>
            <textarea name="textarea" id={name + '-trans'} className = "expand" onFocus = {handleFocus} onBlur = {handleBlur} value = {value} onChange = {handleChange} onKeyPress = {handleSaving}></textarea>
        </div>
    )
}
export default React.memo(CommentInput);