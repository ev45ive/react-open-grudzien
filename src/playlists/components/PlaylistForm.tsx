
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {

}
interface State {

}


const playlist: Playlist = {
  id: 123,
  name: 'Playlist',
  public: true,
  description: 'My playlist'
}


export default class PlaylistForm extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        {/* .form-group>label{Name:}+input.form-control */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" defaultValue={playlist.name} />
        </div>

        {/* .form-group>label>input[type=checkbox]+{ Public} */}
        <div className="form-group"><label>
          <input type="checkbox" defaultChecked={playlist.public} /> Public</label>
        </div>

        {/* .form-group>label{Description:}+textarea.form-control */}
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={playlist.description}></textarea>
        </div>

      </div>
    )
  }
}
