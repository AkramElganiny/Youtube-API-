import React from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    list: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.onSearchSubmit('elite500');
  };

  onSearchSubmit = async term => {
    const response = await youtube.get ('/search', {
      params: {
        q: term,
      },
    });
    this.setState ({
      list: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState ({selectedVideo: video});
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideosList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.list}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
