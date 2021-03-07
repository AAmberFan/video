import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) =>{
    const rederedList = videos.map((video)=>{
        return <VideoItem/>
    });
    return (
    <div>{rederedList}</div>
    );
}

export default VideoList;