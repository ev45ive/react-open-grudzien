
// tsrafc
import React, { useState } from 'react'
import { Album } from '../../core/model/Album'
import { albumSearch } from '../../core/services'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props { }


export const AlbumSearch = () => {
  const [query, setQuery] = useState('batman')
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Album[]>([])


  const search = async (query: string) => {
    try {
      setError(null)
      setQuery(query)
      setLoading(true)
      setResults([])
      const results = await albumSearch.searchAlbums(query)
      setResults(results)
      setLoading(false)
    } catch (error) {
      setError(error?.message)
      setLoading(false)
    }
  }

  return (
    <div>
      {/* .row*2>.col */}
      <div className="row">
        <div className="col">
          <SearchForm onSearch={search} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {loading && <p className="alert alert-info">Loading...</p>}
          {error && <p className="alert alert-danger">{error}</p>}
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  )
}
