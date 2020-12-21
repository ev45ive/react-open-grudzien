
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
            // <ListItem key={playlist.id} playlist={playlist} index={index}/>

            <div className="list-group-item" key={playlist.id}>
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