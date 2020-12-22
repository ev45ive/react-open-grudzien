
// tsrafc
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    console.log('useEffect', query)
    search(query);
  }, [query])

  console.log('render')
  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm onSearch={setQuery} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {loading && <p className="alert alert-info">Loading...</p>}
          {error && <p className="alert alert-danger">{error}</p>}
          {query && <p>Results for "{query}"</p>}
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  )
}
