
import React from 'react'
import { AlbumCard } from './AlbumCard'

interface Props {

}

export const SearchResults = (props: Props) => {
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


