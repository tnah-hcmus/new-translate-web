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
        }, function() {
            const el = document.createElement('input');
            el.innerText = props.content;
            const oldContentEditable = el.contentEditable,
            oldReadOnly = el.readOnly,
            range = document.createRange();

            el.contentEditable = true;
            el.readOnly = true;
            range.selectNodeContents(el);

            var s = window.getSelection();
            s.removeAllRanges();
            s.addRange(range);

            el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

            el.contentEditable = oldContentEditable;
            el.readOnly = oldReadOnly;

            document.execCommand('copy');
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