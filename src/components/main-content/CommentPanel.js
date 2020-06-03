import React from 'react';
import Markdown from 'react-markdown';

const CommentPanel = (props) => {
    const parseContent = () => {
        let parser = new DOMParser;
        let dom = parser.parseFromString(
            '<!doctype html><body>' + props.content,
            'text/html');
        let decodedString = dom.body.textContent;
        return decodedString;
    }
    return (
    <div className = {props.active ? "demo-box demo-box-display": "demo-box" }>
        <div className="demo-controls">
            <span className="demo-response" id={props.name + '-span'}></span>
        </div>
        <Markdown source = {parseContent(props.content)}/>
    </div>
    );
}
export default CommentPanel ;