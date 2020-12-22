
import React, { Component, PureComponent } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlists: Playlist[],
  onSelected: (playlist_id: Playlist['id']) => void
  selected?: Playlist['id'] | null
}

export default class PlaylistsList extends PureComponent<Props, {}> {

  select = (selected: Playlist['id']) => {
    this.props.onSelected(selected)
  }

  render() {
    return (
      <div>
        <div className="list-group">

          {this.props.playlists.map((playlist, index) =>
            // <ListItem key={playlist.id} playlist={playlist} index={index}/>

            <div className={
              `list-group-item ${this.props.selected === playlist.id ? 'active' : ''}`}
              onClick={() => this.select(playlist.id)}

              key={playlist.id}>
              <span>{index + 1}. {playlist.name}</span>
            </div>
          )}

        </div>

      </div>
    )
  }
}

// const ListItem = ({ playlist, index }: { playlist: Playlist, index: number }) => <div className="list-group-item" >
//   <span>{index + 1}. {playlist.name}</span>
// </div>