
// tsrafc
import React from 'react'
import { Album } from '../../core/model/Album'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props {}


const results:Album[] = []


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
