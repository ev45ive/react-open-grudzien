import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PlaylistsView from './playlists/containers/PlaylistsView';
import { AlbumSearch } from './search/containers/AlbumSearch';

import { Redirect, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* .container>.row>.col */}
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Hello React</h1>

              <Switch>
                <Redirect path="/" exact={true} to="/playlists" />
                {/* ==== */}
                <Route path="/playlists" component={PlaylistsView} />
                <Route path="/search" component={AlbumSearch} />
                {/* ==== */}
                {/* <Route path="*" component={PageNotFound}/> */}
                <Route path="*" render={() => <h1>Page Not Found</h1>} />
              </Switch>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
