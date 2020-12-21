
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {

}
interface State {
  playlist: Playlist,
  counter: number
}



export default class PlaylistForm extends Component<Props, State> {
  state: State = {
    playlist: {
      id: 123,
      name: 'Playlist',
      public: true,
      description: 'My playlist'
    },
    counter: 0
  }

  constructor(props: Props) {
    super(props)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)

    // this.state.playlist.name = event.target.value
    // this.setState({})

    this.setState({
      playlist: {
        ...this.state.playlist,
        name: event.target.value
      }
    })

    this.setState({
      counter: this.state.playlist.name.length
    })
  }

  render() {
    const { playlist } = this.state

    return (
      <div>
        {/* .form-group>label{Name:}+input.form-control */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={playlist.name}
            onChange={this.handleChange} />
          {/* {playlist.name.length} / 170 */}
          {this.state.counter} / 170
        </div>

        {/* .form-group>label>input[type=checkbox]+{ Public} */}
        <div className="form-group"><label>
          <input type="checkbox" defaultChecked={playlist.public} /> Public</label>
        </div>

        {/* .form-group>label{Description:}+textarea.form-control */}
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" defaultValue={playlist.description}></textarea>
        </div>

      </div>
    )
  }
}
