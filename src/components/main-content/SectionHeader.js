import React, {useState, useContext, useEffect} from 'react';
import {deleteTab} from '../../actions/tabs/tabs_action';
import { connect } from 'react-redux';
import NoteModal from './NoteModal';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import SectionContext from '../context/section-context'

const SectionHeader = (props) => {
    const [openNote, setOpenNote] = useState(false);
    const {tabID, link, title, subReddit, upvotes} = useContext(SectionContext);
    const deletePost = () => {
        confirmAlert({
            title: 'Bạn chắc chứ ?',
            message: 'Bạn thật sự muốn xoá tab này ?',
            buttons: [
                {
                label: 'Xoá',
                onClick: () =>  props.deleteTab(tabID, props.category)
                },
                {
                label: 'Mình nhầm'
                }
            ]
        });
    }
    useEffect(() => {
        window.addEventListener("beforeunload", (ev) => 
        {  
            ev.preventDefault();
            return ev.returnValue = 'Nhớ kiểm tra xem lưu chưa nhé';
        });
    }, []);
    const closeNote = () => {
        setOpenNote(false);
    }
        return (
            <header className="section-header">
                <div className="section-wrapper">
                <h1>
                <svg className="section-icon"><use xlinkHref={props.iconHref}/></svg>
                {title ? title + ` (Subreddit: ${subReddit} | ${upvotes} points)`: 'Tab này chưa có bài dịch nào'}
                </h1>
                <div>
                    <form onSubmit={props.handleSubmitLink} style = {{display: 'flex'}}>
                        <input className="demo-input" name="link" aria-label="Link to translate" placeholder="Nhập link reddit để bắt đầu dịch" defaultValue = {link.replace(/(\/+)$/,'') || ''} disabled = {link !== ''}></input>
                        <button className="demo-button">Bắt đầu dịch</button>
                    </form>
                    <p>Open <a href={link ? link.replace(/(\/+)$/,'') : props.category !== 'blank' ? `https://www.reddit.com/${props.category}`: 'https://www.reddit.com/'}  target="_blank" >reddit link<span className="u-visible-to-screen-reader">(opens in new window)</span></a> in another tab in your browser.</p>
                    <div className = "wrap" style = {{justifyContent: 'space-between', marginRight: '10%'}}>
                        <div style = {{marginBottom: '5px'}}>
                        <button className="demo-button" id={tabID + '-preview'} onClick = {props.previewContent}>Preview</button>
                        <button className="demo-button" id={tabID + '-note'} onClick = {() => setOpenNote(true)}>Note</button>
                        <button className="demo-button" id={tabID + '-save'} onClick = {props.savePost}>Save</button>
                        <button className="demo-button" id={tabID + '-delete'} onClick = {deletePost}>Delete</button>
                        </div>
                        <form style = {{ display: 'flex'}} onSubmit={props.handleSubmitCredit}>
                        <input className="demo-input" name="credit" id = {tabID + '-credit'} aria-label="credit" placeholder="Thêm credit" defaultValue = {''}></input>
                        <button className="demo-button">Thêm credit</button>
                        </form>
                    </div>
                </div>
                </div>
                <NoteModal
                 isOpen = {openNote}
                 name = {tabID}
                 saveNote = {props.saveNote}
                 close = {closeNote}
                 />
            </header>
        )
}
const mapDispatchToProps = {
    deleteTab
  }
export default connect(null, mapDispatchToProps)(SectionHeader);