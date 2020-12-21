
import React, { Component } from 'react'

interface Props {
  
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
        {/* .list-group>.list-group-item*3>span{Text} */}
        <div className="list-group">
          <div className="list-group-item" onClick={this.select}><span>Text</span></div>
          <div className="list-group-item"><span>Text</span></div>
          <div className="list-group-item"><span>Text</span></div>
        </div>
        
      </div>
    )
  }
}
