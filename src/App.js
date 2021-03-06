import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onTermSubmit('superheros')
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ 
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '1rem'}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;
