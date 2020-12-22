
// tsrafc
import React from 'react'
import { Album } from '../../core/model/Album'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props { }


const albumsMock: Pick<Album, 'id' | 'name' | 'images'>[] = [
  { id: '123', name: 'Album 123', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
  { id: '234', name: 'Album 234', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
  { id: '345', name: 'Album 345', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
  { id: '456', name: 'Album 456', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/350/350' }] },
]

export const AlbumSearch = (props: Props) => {
  const results = albumsMock  as unknown as Album[]
  
  return (
    <div>
      {/* .row*2>.col */}
      <div className="row">
        <div className="col">
          <SearchForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  )
}
