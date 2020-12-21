
// tsrafc
import React from 'react'

interface Props {

}

const playlist = {
  id: 123,
  name: 'Playlist',
  public: true,
  description: 'My playlist'
}

export const PlaylistDetails = (props: Props) => {
  return (
    <div>
      {/* dl>(dt+dd)*3 */}
      <dl>
        <dt>Name:</dt>
        <dd>{playlist.name}</dd>
        <dt>Public</dt>
        <dd>{playlist.public ? 'Yes' : 'No'}</dd>
        <dt>Description:</dt>
        <dd>{playlist.description}</dd>
      </dl>
    </div>
  )
}
