
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlists: Playlist[]
}
interface State {

}

export default class PlaylistsList extends Component<Props, State> {
  state = {}
  select = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // event.nativeEvent
  }

  render() {

    return (
      <div>
        <div className="list-group">

          {this.props.playlists.map((playlist, index) =>

            <div className="list-group-item" key={playlist.id}>
              <span>{index + 1}. {playlist.name}</span>
            </div>
          )}

        </div>

      </div>
    )
  }
}
