import React, {Suspense, lazy, useState, useContext, useEffect} from 'react';
import {deleteTab} from '../../actions/tabs/tabs_action';
import { connect } from 'react-redux';
const NoteModal  = lazy(() => import(/* webpackChunkName: "NoteModal" */'./NoteModal'));
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import SectionContext from '../context/section-context'

const SectionHeader = (props) => {
    const [openNote, setOpenNote] = useState(false);
    const [download, setDownload] = useState(false);
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
    const downloadVideo = () => {
        if(props.isVideo) {
            setDownload(true);
            document.getElementById(tabID + '-download').innerHTML = 'Downloading';
        }
    }
    useEffect(() => {
        window.addEventListener("beforeunload", (ev) => 
        {  
            ev.preventDefault();
            return ev.returnValue = 'Nhớ kiểm tra xem lưu chưa nhé';
        });
        window.onmessage = function(e){
            const button =  document.getElementById(tabID + '-download');
            if (e.data == 'Worker done') {
                button.innerHTML = 'Downloaded'
            }
            if(e.data == 'Download done') {
                button.innerHTML = 'Combining'
            }
            if(e.data == 'Load worker') {
                button.innerHTML = 'Loading service worker'
            }
            if(e.data == 'Loading') {
                button.innerHTML = 'Loading'
            }
            if(e.data == 'Loaded') {
                button.innerHTML = 'Downloading'
            }
        };

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
                    <p>Mở <a href={link ? link.replace(/(\/+)$/,'') : props.category !== 'blank' ? `https://www.reddit.com/${props.category}`: 'https://www.reddit.com/'}  target="_blank" >link reddit này<span className="u-visible-to-screen-reader">(opens in new window)</span></a> trong tab mới.</p>
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
                    <button className="demo-button" id={tabID + '-download'} onClick = {downloadVideo}  style = {{marginTop: '10px'}} disabled = {download}>{props.isVideo ? 'Download Video (beta)' : 'No video found'}</button>
                    {download && <iframe
                        src={
                        "https://down-583a6.web.app/?video=" +
                        btoa(props.fallbackUrl) +
                        "&audio=" +
                        btoa(props.url + '/audio')
                        }
                        style = {{ display: "none" }}
                    />}
                </div>
                </div>
                <Suspense fallback = {<div></div>} key = {tabID + '-note-suspense'}>
                    <NoteModal
                    isOpen = {openNote}
                    key = {tabID + '-note'}
                    name = {tabID}
                    saveNote = {props.saveNote}
                    close = {closeNote}
                    />
                </Suspense>
            </header>
        )
}
const mapDispatchToProps = {
    deleteTab
  }
export default connect(null, mapDispatchToProps)(SectionHeader);