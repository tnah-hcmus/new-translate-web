import React from 'react';

const SuggestPost = (props) => {
    return (
          <div className="suggest-wrapper">
            <p>{props.subReddit}</p>
            <div className="u-avoid-clicks">{props.awards} {props.awards && <span className="demo-meta-divider">|</span>} Upvote: {props.upvotes}</div>
            <a href = {props.shortenLink}>{props.title}</a>
        </div>)
}  
export default SuggestPost;