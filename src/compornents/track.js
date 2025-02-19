import React from 'react';
import './style.css';

export const Track = (props) => {

    return(
        <div className="track">
            <div className="track-info">
                <h3>{props.title}</h3>
                <p>原曲"{props.original}"</p>
                <a href={props.youtubeUrl} target="_blank" rel="noreferrer">YouTube</a>&nbsp;
                <a href={props.soundcloudUrl} target="_blank" rel="noreferrer">SoundCloud</a>
            </div>
            <div className="thumbnail">
                <a href={`https://www.youtube.com/watch?v=${props.id}&ab_channel=DTMHURTA`} target="_blank" rel="noreferrer">
                    <img src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`} alt={`${props.title} Thumbnail`} />
                </a>
            </div>
        </div>
    )
}

export default Track;