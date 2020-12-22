
import React from 'react'
import { Album } from '../../core/model/Album'
import { AlbumCard } from './AlbumCard'

interface Props {
  results: Album[]
}

export const SearchResults = ({ results }: Props) => {
  // const results = props.results
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {results.map((album) => <div className="col">
          <AlbumCard album={album} key={album.id} />
        </div>
        )}

      </div>
    </div>
  )
}


