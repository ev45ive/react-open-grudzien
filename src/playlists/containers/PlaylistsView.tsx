
// tsrcc
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistsList from '../components/PlaylistsList'

interface Props {

}
interface State {
  selected: Playlist
  playlists: Playlist[]
}



export default class PlaylistsView extends Component<Props, State> {
  state = {
    playlists: [
      {
        id: 123,
        name: 'Playlist',
        public: true,
        description: 'My playlist'
      },
      {
        id: 234,
        name: 'Playlist 234',
        public: false,
        description: 'My playlist 234'
      },
      {
        id: 345,
        name: 'Playlist 354',
        public: true,
        description: 'My playlist 345'
      },
    ],

    selected: {
      id: 123,
      name: 'Playlist',
      public: true,
      description: 'My playlist'
    }
  }

  render() {
    return (
      <div>
        {/* .row>.col>PlaylistList^.col>PlaylistDetails+PlaylistForm */}
        <div className="row">
          <div className="col">
            <PlaylistsList playlists={this.state.playlists}></PlaylistsList>
          </div>
          <div className="col">
            <PlaylistDetails playlist={this.state.selected}></PlaylistDetails>
            <PlaylistForm></PlaylistForm>
          </div>
        </div>
      </div>
    )
  }
}
