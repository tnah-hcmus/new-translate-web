import React, {useContext} from 'react';
import InputContext from '../../../context/input-context';


const CommentInput = (props) => {
    const {addTransComment, editTransComment} = useContext(InputContext);

    const handleFocus = (e) => {
        addTransComment(props.name, props.level, props.prefixed, props.parent, props.author, props.description);
    }
    const handleBlur = (e) => {
        editTransComment(props.name, e.target.value);
        props.savePost();
    }
    return (
        <div className = {props.active ? "demo-input-box demo-input-box-display": "demo-input-box" }>
            <div className="demo-controls">
                <span className="demo-response" id={props.name + '-span'}></span>
            </div>
            <textarea name="textarea" id={props.name + '-trans'} className = "expand" onFocus = {handleFocus} onBlur = {handleBlur}></textarea>
        </div>
    )
}
export default CommentInput;