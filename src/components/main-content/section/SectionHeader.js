import React, {Suspense, lazy, useState, useContext, useEffect} from 'react';
import {deleteTab} from '../../../actions/tabs/tabs_action';
import {deleteAllReplies} from '../../../actions/replies/replies_action';
import { connect } from 'react-redux';
const NoteModal  = lazy(() => import(/* webpackChunkName: "NoteModal" */'../modal/NoteModal'));
import downloadImg from '../../../crawler/img-downloader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import SectionContext from '../../../context/section-context';
import database from '../../../firebase/firebase';

const SectionHeader = (props) => {
    const [openNote, setOpenNote] = useState(false);
    const [downloadVideo, setDownloadVideo] = useState(false);
    const [downloadImage, setDownloadImage] = useState(false);
    const {tabID, link, title, subReddit, upvotes, id, uuid, savePost, credit} = useContext(SectionContext);
    const [value, setValue] = useState(credit !== '' ? credit : '');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const deletePost = () => {
        confirmAlert({
            title: 'Bạn chắc chứ ?',
            message: 'Bạn thật sự muốn xoá tab này ?',
            buttons: [
                {
                label: 'Xoá',
                onClick: () =>  {props.deleteTab(tabID, props.category); props.deleteAllReplies(tabID); database.ref(`${id}/${uuid}`).remove();}
                },
                {
                label: 'Mình nhầm'
                }
            ]
        });
    }
    const startDownloadVideo = () => {
        if(props.isVideo) {
            setDownloadVideo(true);
        }
    }

    const startDownloadImage = () => {
        if(props.url) {
            setDownloadImage(true);
            downloadImg(props.url, tabID);            
        }
    }
    const closeNote = () => {
        setOpenNote(false);
    }
    const save = () => {
        savePost().then(() => {
            database.ref(id).child(uuid).set({timemark: Date.now(), credit: (credit !== '') ? credit : 'Một member chăm chỉ nào đó'});
          });
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
                        <button className="demo-button" id={tabID + '-save'} onClick = {save}>Save</button>
                        <button className="demo-button" id={tabID + '-delete'} onClick = {deletePost}>Delete</button>
                        </div>
                        <form style = {{ display: 'flex'}} onSubmit={props.handleSubmitCredit}>
                        <input className="demo-input" name="credit" id = {tabID + '-credit'} aria-label="credit" placeholder="Thêm credit" value = {value} onChange = {handleChange}></input>
                        <button className="demo-button">{props.credit === '' ? 'Thêm credit' : 'Sửa credit'}</button>
                        </form>
                    </div>
                    <div className = "wrap" style = {{justifyContent: 'space-between', marginRight: '10%', marginTop: '10px'}}>
                        <button className="demo-button download" id={tabID + '-download-video'} onClick = {startDownloadVideo}  disabled = {downloadVideo || !props.isVideo}>{props.isVideo ? 'Download Video' : 'No video found'}</button>
                        <button className="demo-button download" id={tabID + '-g-trans'} onClick = {() => {props.setHelper(props.helper ? false : true); props.setGoogleHelper();}}>{props.helper ? 'Translator helper: ON' : 'Translator helper: OFF'}</button>
                        <button className="demo-button" id={tabID + '-download-image'} onClick = {startDownloadImage} disabled = {downloadImage || !props.isImage}>{props.isImage ? 'Download Image' : 'No image found'}</button>
                    </div>
                    {downloadVideo && <iframe
                        key = {tabID}
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
    deleteTab, deleteAllReplies
  }
export default connect(null, mapDispatchToProps)(SectionHeader);