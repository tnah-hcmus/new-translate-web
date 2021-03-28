import React from 'react';
import Modal from 'react-modal';

const NoteModal = (props) => {
    const save = () => {
        props.saveNote();
        props.close();
    }  
    const handleKeyDown = (e) => {
        e.target.style.height = '100%';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return(
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.close}
        ariaHideApp={false}
        contentLabel="Preview"
        closeTimeoutMS={200}
        className="preview-modal"
        >
        <h5 className="modal__title">Gửi gắm vào bài dịch gì đó đi</h5>
        <textarea name="textarea" id={props.name + '-note-input'} className = "expand" onKeyDown={handleKeyDown} style = {{backgroundColor: '#fff', color: 'black'}} autoFocus></textarea>
        <button className="button" onClick= {save} id = {props.id + 'save-button'}>Save</button>
        </Modal>
    )
}
export default React.memo(NoteModal);