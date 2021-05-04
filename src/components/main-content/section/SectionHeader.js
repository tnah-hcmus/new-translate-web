import React, {Suspense, lazy, useState, useContext, useEffect} from 'react';
import {deleteTabWCloud} from '../../../actions/tabs/tabs_action';
import {deleteAllReplies} from '../../../actions/replies/replies_action';
import { connect } from 'react-redux';
const NoteModal  = lazy(() => import(/* webpackChunkName: "NoteModal" */'../modal/NoteModal'));
import downloadImg from '../../../crawler/img-downloader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {deleteDraft} from '../../../actions/draft/draft';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
const saveStateMap = {
    0: 'Save',
    1: 'Saving',
    2: 'Saved'
  }

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'var(--color-accent)',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: 'var(--color-accent)',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[200]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const SectionHeader = (props) => {
    const [openNote, setOpenNote] = useState(false);
    const [downloadVideo, setDownloadVideo] = useState(false);
    const [downloadImage, setDownloadImage] = useState(false);
    const {tabID, link, title, subReddit, upvotes, id, uuid, savePost} = props;
    const [value, setValue] = useState("");
    useEffect(() => {
        if(props.credit !== '') setValue(props.credit);
    }, [props.credit]);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSwitchTranslator = (e) => {
        props.setHelper(e.target.checked);
        props.setGoogleHelper();
    }
    const deletePost = () => {
        confirmAlert({
            title: 'Bạn chắc chứ ?',
            message: 'Bạn thật sự muốn xoá tab này ?',
            buttons: [
                {
                label: 'Xoá',
                onClick: () =>  {props.deleteTab(tabID, props.category, props.setActiveSection); props.deleteAllReplies(tabID); deleteDraft(id, uuid);}
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
        savePost(null, {id, uuid, data: {timemark: Date.now(), value: (value !== '') ? value : 'Một member chăm chỉ nào đó'}})
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
                        <button className="demo-button" id={tabID + '-save'} onClick = {save}>{saveStateMap[props.saveState]}</button>
                        <button className="demo-button" id={tabID + '-delete'} onClick = {deletePost}>Delete</button>
                        </div>
                        <form style = {{ display: 'flex'}} onSubmit={props.handleSubmitCredit}>
                        <input className="demo-input" name="credit" id = {tabID + '-credit'} aria-label="credit" placeholder="Thêm credit" value = {value} onChange = {handleChange}></input>
                        <button className="demo-button">{!props.credit && props.credit === '' ? 'Thêm credit' : 'Sửa credit'}</button>
                        </form>
                    </div>
                    <div className = "wrap" style = {{justifyContent: 'space-between', marginRight: '10%', marginTop: '10px'}}>
                        <button className="demo-button download" id={tabID + '-download-video'} onClick = {startDownloadVideo}  disabled = {downloadVideo || !props.isVideo}>{props.isVideo ? 'Download Video' : 'No video found'}</button>
                        <FormControlLabel
                            classes = {{
                                label: 'demo-text'
                            }}
                            control={
                            <IOSSwitch
                                checked={props.helper}
                                onChange={handleSwitchTranslator}
                                name="translatorHelper"
                            />
                            }
                            label="Translator helper"
                        />
                        <FormControlLabel
                            classes = {{
                                label: 'demo-text'
                            }}
                            control={
                            <IOSSwitch
                                checked={props.fullCrawl}
                                onChange={(e) => props.updateCrawl(e.target.checked)}
                                name="Fullcomment"
                            />
                            }
                            label="Full comments"
                        />
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
    deleteTab: deleteTabWCloud, deleteAllReplies
  }
export default React.memo(connect(null, mapDispatchToProps)(SectionHeader));