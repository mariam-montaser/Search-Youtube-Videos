import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './api/youtube';

class App extends Component {

  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onFormSubmited('news');
  }

  onFormSubmited = async (term) => {
    const {data: {items}} = await youtube.get('/search', {params: {q: term}});
    this.setState({videos: items, selectedVideo: items[0]});
  }

  render() {
  return (
    <div className="app ui container">
      <SearchBar onSubmit={this.onFormSubmited} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={this.state.videos} onVideoSelect={(vid) => this.setState({selectedVideo: vid})} />
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
