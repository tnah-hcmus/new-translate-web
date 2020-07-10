import React, {useContext, useEffect, useState} from 'react';
import InputContext from '../../../context/input-context';
import SectionContext from '../../../context/section-context'
import database from '../../../firebase/firebase';


const CommentInput = (props) => {
    const {addTransComment, editTransComment} = useContext(InputContext);
    const [value, setValue] = useState('');
    const {id,uuid,credit} = useContext(SectionContext);
    useEffect(() => {
        if(props.trans[props.name]) {
            setValue(props.trans[props.name].body);
            if(props.trans[props.name].body !== '') props.show(1);
            else props.show(0);
        }
    }, [])
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleFocus = (e) => {
        addTransComment(props.name, props.level, props.prefixed, props.parent, props.author, props.description);
    }
    const handleBlur = (e) => {
        editTransComment(props.name, e.target.value);
        props.savePost().then(() => {
            database.ref(id).child(uuid).set({timemark: Date.now(), credit: (credit !== '') ? credit : 'Một member chăm chỉ nào đó'});
        });
    }
    return (
        <div className = {props.active ? "demo-input-box demo-input-box-display": "demo-input-box" }>
            <div className="demo-controls">
                <span className="demo-response" id={props.name + '-span'}></span>
            </div>
            <textarea name="textarea" id={props.name + '-trans'} className = "expand" onFocus = {handleFocus} onBlur = {handleBlur} value = {value} onChange = {handleChange}></textarea>
        </div>
    )
}
export default CommentInput;