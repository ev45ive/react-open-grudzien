
// tsrafc
import React from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
}

export const PlaylistDetails = ({ playlist }: Props) => {
  // const { playlist } = props;

  return (
    <div title={playlist.name} data-id={'playlist_' + playlist.id}>
      {/* dl>(dt+dd)*3 */}
      <dl>
        <dt>Name:</dt>
        <dd>{playlist.name}</dd>
        <dt>Public</dt>
        <dd style={
          {
            borderBottom: '1px solid currentColor',
            color: playlist.public ? 'red' : 'blue'
          }
        }>{playlist.public ? 'Yes' : 'No'}</dd>
        <dt>Description:</dt>
        <dd>{playlist.description}</dd>
      </dl>
      
      <button className="btn btn-info">Edit</button>
        
    </div>
  )
}
