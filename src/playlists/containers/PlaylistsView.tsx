
// tsrcc
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistsList from '../components/PlaylistsList'

interface Props {

}

interface State {
  playlists: Playlist[]
  selected?: Playlist
  mode: 'details' | 'edit'
}

export default class PlaylistsView extends Component<Props, State> {
  state: State = {
    mode: 'details',
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

    // selected: {
    //   id: 123,
    //   name: 'Playlist',
    //   public: true,
    //   description: 'My playlist'
    // }
  }

  select(selectedId: Playlist['id']) {
    this.setState({
      selected:
        selectedId === this.state.selected?.id ? undefined :
          this.state.playlists.find(p => p.id === selectedId)
    })
  }

  edit = () => { this.setState({ mode: 'edit' }) }
  cancel = () => { this.setState({ mode: 'details' }) }
  save = () => { this.setState({ mode: 'details' }) }

  render() {
    return (
      <div>
        {/* .row>.col>PlaylistList^.col>PlaylistDetails+PlaylistForm */}

        <div className="row">
          <div className="col">
            <PlaylistsList
              playlists={this.state.playlists}
              selected={this.state.selected && this.state.selected.id}
              onSelected={playlist_id => this.select(playlist_id)}
            />
          </div>
          <div className="col">

            {this.state.selected && <div>

              {this.state.mode === 'details' &&
                <PlaylistDetails playlist={this.state.selected} onEdit={this.edit} />}
                
              {this.state.mode === 'edit' && 
                <PlaylistForm playlist={this.state.selected} onCancel={this.cancel} onSave={this.save} />}

            </div>}


            {!this.state.selected && <p>Please select playlist</p>}
          </div>
        </div>
      </div>
    )
  }
}
