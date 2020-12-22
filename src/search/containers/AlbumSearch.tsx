
// tsrafc
import React from 'react'
import { Album } from '../../core/model/Album'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props { }


const results: Pick<Album, 'id' | 'name' | 'images'>[] = [
  { id: '123', name: 'Album 123', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
  { id: '234', name: 'Album 234', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
  { id: '345', name: 'Album 345', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
  { id: '456', name: 'Album 456', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/350/350' }] },
]

// type PartialAlbum = Album | Track | undefined
// type PartialAlbum = {
//   id: Album['id'],
//   name: Album['name'],
// }

// type PartialAlbum = {
//   [k: string]: Album['id'],
// }

// type PartialAlbum = {
//   [k in 'id' | 'name' | 'images']: Album[k]
// }

// type Pick<T, K extends keyof T> = {
//   [k in K]: T[k]
// }

// type Mock = Pick<Album, 'id' | 'name' | 'images'>

// type Partial<T> = {
//   [k in keyof T]?: T[k]
// }



export const AlbumSearch = (props: Props) => {
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
          <SearchResults />
        </div>
      </div>
    </div>
  )
}
