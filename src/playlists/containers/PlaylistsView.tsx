
// tsrcc
import React, { Component } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistsList from '../components/PlaylistsList'

interface Props {
  
}
interface State {
  
}

export default class PlaylistsView extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        {/* .row>.col>PlaylistList^.col>PlaylistDetails+PlaylistForm */}
        <div className="row">
          <div className="col">
            <PlaylistsList></PlaylistsList>
          </div>
          <div className="col">
            <PlaylistDetails></PlaylistDetails>
            <PlaylistForm></PlaylistForm>
          </div>
        </div>
      </div>
    )
  }
}
