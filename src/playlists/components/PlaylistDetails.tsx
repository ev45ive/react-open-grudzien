
// tsrafc
import React from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
  onEdit(): void
}

export const PlaylistDetails = React.memo(({ playlist, onEdit }: Props) => {

  return (
    <div title={playlist.name} data-id={'playlist_' + playlist.id}>
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

      <button className="btn btn-info" onClick={onEdit}>Edit</button>

    </div>
  )
}/* , propsAreEqual?: ((prevProps: Readonly<Props>, nextProps: Readonly<Props>) => boolean */)
