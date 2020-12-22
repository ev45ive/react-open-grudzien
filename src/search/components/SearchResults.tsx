
import React from 'react'
import { Album } from '../../core/model/Album'
import { AlbumCard } from './AlbumCard'

interface Props {
  results: Album[]
}

export const SearchResults = (props: Props) => {
  props.results
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        <div className="col">
          <AlbumCard />
        </div>
        <div className="col">
          <AlbumCard />
        </div>
        <div className="col">
          <AlbumCard />
        </div>
        <div className="col">
          <AlbumCard />
        </div>
      </div>
    </div>
  )
}


