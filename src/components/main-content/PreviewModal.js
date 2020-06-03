import React, {useState} from 'react';
import Modal from 'react-modal';

const PreviewModal = (props) => {
    const [isClose, setClose] = useState(false);
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
      }
    const copyToClipBoard = (event) => {
        let id = props.id
        navigator.clipboard.writeText(props.content).then(function() {
            let button = document.getElementById(id + 'copy-button');
            button.innerHTML = 'Copied!';
            button.classList.add('button-click');
        });
    }
    const closeModal = async () => {
        setClose(true);
        await sleep(300);
        props.clear();
        await sleep(100);
        setClose(false);
    }
    return(
        <Modal
        isOpen={props.isOpen && !isClose}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Preview"
        closeTimeoutMS={200}
       className="preview-modal"
        >
        <a className = "close" onClick = {closeModal}></a>
        <div className="modal-panel">
            <h3 className="modal__title">Preview your post</h3>
            <div>
                <button className="button" onClick= {copyToClipBoard} id = {props.id + 'copy-button'}>Copy</button>
            </div>
        </div>
        <p>{props.content}</p>
        </Modal>
        )
}
export default PreviewModal;