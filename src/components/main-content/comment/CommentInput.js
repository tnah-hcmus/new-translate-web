import React, {useContext, useEffect, useState} from 'react';
import InputContext from '../../../context/input-context';


const CommentInput = (props) => {
    const {addTransComment, editTransComment, changed} = useContext(InputContext);
    const {id: name, parent, trans} = props.commentData;
    const [value, setValue] = useState('');
    useEffect(() => {
        if(trans[name]) {
            setValue(trans[name].body);
            if(trans[name].body !== '') props.show(1);
            else props.show(0);
        }
    }, [])
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleFocus = (e) => {
        addTransComment(name, props.level, props.prefixed, parent, props.author, props.description);
        changed();
    }
    const handleBlur = (e) => {
        editTransComment(name, e.target.value);
        changed();
    }
    return (
        <div className = {props.active ? "demo-input-box demo-input-box-display": "demo-input-box" }>
            <div className="demo-controls">
                <span className="demo-response" id={name + '-span'}></span>
            </div>
            <textarea name="textarea" id={name + '-trans'} className = "expand" onFocus = {handleFocus} onBlur = {handleBlur} value = {value} onChange = {handleChange}></textarea>
        </div>
    )
}
export default React.memo(CommentInput);