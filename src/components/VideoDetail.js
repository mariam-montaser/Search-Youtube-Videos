import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div className="video-detail">Loading Videos...</div>
  }
  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe className="" title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
