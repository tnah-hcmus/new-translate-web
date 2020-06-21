import React, {Suspense, lazy, useState, useContext, useEffect} from 'react';
import {deleteTab} from '../../actions/tabs/tabs_action';
import { connect } from 'react-redux';
const NoteModal  = lazy(() => import(/* webpackChunkName: "NoteModal" */'./NoteModal'));
import downloadImg from '../../crawler/img-downloader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import SectionContext from '../context/section-context';

const SectionHeader = (props) => {
    const [openNote, setOpenNote] = useState(false);
    const [downloadVideo, setDownloadVideo] = useState(false);
    const [downloadImage, setDownloadImage] = useState(false);
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
        confirmAlert({
            title: 'Thông báo nhỏ',
            message: 'Tool sẽ chính thức kết thúc open beta và chuyển về tên miền chính thức rvnweb.site vào ngày 24/06/2020, domain reddit-translate.web.app sẽ ngưng hoạt động. Các bạn nhớ lưu bài và sẵn sàng chuyển nhà nhé :>',
            buttons: [
                {
                label: 'Lưu ngay!',
                },
                {
                label: 'Mình biết rồi.'
                }
            ]
          });
    }, [])
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
                    <div className = "wrap" style = {{justifyContent: 'space-between', marginRight: '10%', marginTop: '10px'}}>
                        <button className="demo-button download" id={tabID + '-download-video'} onClick = {startDownloadVideo}  disabled = {downloadVideo || !props.isVideo}>{props.isVideo ? 'Download Video' : 'No video found'}</button>
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
    deleteTab
  }
export default connect(null, mapDispatchToProps)(SectionHeader);