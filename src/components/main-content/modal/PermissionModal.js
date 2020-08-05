import React, {useRef} from 'react';
import Modal from 'react-modal';
const PermissionModal = (props) => {
    const copyRef = useRef(null)
    const copyToClipBoard = (event) => {
        let id = props.id;
        let button = copyRef.current;
        navigator.clipboard.writeText(props.content).then(function() {
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
            button.innerHTML = 'Copied!';
            button.classList.add('button-click');
        });
    }
    return(
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.close}
        ariaHideApp={false}
        contentLabel="Permission"
        closeTimeoutMS={200}
        className="preview-modal prevent-modal"
        >
        <a className = "close" onClick = {props.close}></a>
        <div className="modal-panel">
            <h3 className="modal__title">Subreddit này cần có permission để dịch!</h3>
            <div>
                <button className="button" onClick= {copyToClipBoard} ref = {copyRef}>Copy</button>
            </div>
        </div>
        <h3>Bạn đã có permission chưa ? Nếu chưa có hãy xin permission theo mẫu ở dưới nhé!</h3>
        <p>{props.content.replace('xxxx', props.author)}</p>
        <button><a href = "https://docs.google.com/spreadsheets/d/1qlccnLkRCkflo2lJjjZnN0cdKSpUvBQ05XL164I2DGw/htmlview" target = "_blank">Cập nhật permission</a></button>
        </Modal>
        )
}
PermissionModal.defaultProps = {
    content: "Dear xxxx," + "\r\n" + "I've been reading your stories on nosleep and am really fascinated by them. Now I'm planning to make a Vietnamese translation for some of you stories. I DO NOT make the translation for any kind of profit, of course, I just want to translate and post them on a private group by a non-profit fanpage RVN on Facebook for Vietnamese people who are interested in nosleep stories. I will include the link to the original post as well." + "\r\n" + "I am looking forward to your permission soon. Thank you." + "\r\n" + "Your sincerely," + "\r\n" + "___",
  };
export default PermissionModal;