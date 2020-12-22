
// tsrafc
import React from 'react'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props {
  
}

export const AlbumSearch = (props: Props) => {
  return (
    <div>
      {/* .row*2>.col */}
      <div className="row">
        <div className="col">
          <SearchForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SearchResults/>
        </div>
      </div>
    </div>
  )
}
