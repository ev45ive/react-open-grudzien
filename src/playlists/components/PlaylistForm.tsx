
import React, { Component } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
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

  componentDidMount(){
    if(this.nameInputRef.current){
      this.nameInputRef.current.focus()
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    this.setState((prevState, props) => {
      console.log(event )
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

        <button className="btn btn-danger">Cancel</button>
        
        <button className="btn btn-success">Save</button>

      </div>
    )
  }
}
