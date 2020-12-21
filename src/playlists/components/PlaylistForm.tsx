
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
  onCancel(): void,
  onSave(): void,
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

  nameInputRef = React.createRef<HTMLInputElement>()

  componentDidMount() {
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus()
    }
  }

  static getDerivedStateFromProps(nextProps: Props, nextState: State) {
    console.log('getDerivedStateFromProps')
    return {
      playlist: nextProps.playlist.id === nextState.playlist.id ? nextState.playlist : nextProps.playlist
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.props.playlist !== nextProps.playlist || this.state.playlist !== nextState.playlist
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setState((prevState, props) => {
      // console.log(event)
      // USE IMMUTABLE OBJECTS FOR FASTER UPDATES! (shouldComponentUpdate())
      // this.state.playlist.name = event.target.name;
      // return {}
      return ({
        playlist: {
          ...prevState.playlist,
          name: event.target.value
        }
      })
    })
  }

  render() {
    console.log('render')
    const { playlist } = this.state

    return (
      <div>
        {/* .form-group>label{Name:}+input.form-control */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={playlist.name} ref={this.nameInputRef}
            onChange={this.handleChange} />
          {playlist.name.length} / 170
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

        <button className="btn btn-danger" onClick={this.props.onCancel}>Cancel</button>

        <button className="btn btn-success" onClick={this.props.onSave}>Save</button>

      </div>
    )
  }
}
