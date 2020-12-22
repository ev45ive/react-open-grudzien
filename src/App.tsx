import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PlaylistsView from './playlists/containers/PlaylistsView';
import { AlbumSearch } from './search/containers/AlbumSearch';


class App extends React.Component {
  render() {
    return (
      <div>
        {/* .container>.row>.col */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Hello React</h1>

              {/* <PlaylistsView /> */}
              <AlbumSearch/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
