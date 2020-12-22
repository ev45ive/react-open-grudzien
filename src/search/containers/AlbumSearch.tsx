
// tsrafc
import React, { useEffect, useState } from 'react'
import { useSearchRequest } from '../../core/hooks/useSearchRequest'
import { Album } from '../../core/model/Album'
import { albumSearch } from '../../core/services'
import { SearchForm } from '../components/SearchForm'
import { SearchResults } from '../components/SearchResults'

interface Props { }

export const AlbumSearch = () => {

  const {
    setQuery, error, loading, query, results
  } = useSearchRequest((query: string) => albumSearch.searchAlbums(query))

  useEffect(() => { setQuery('batman') }, [])

  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm onSearch={setQuery} query={query || ''} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {loading && <p className="alert alert-info">Loading...</p>}
          {error && <p className="alert alert-danger">{error}</p>}
          {query && <p onClick={() => setQuery('')}>Results for "{query}"</p>}
          {results && <SearchResults results={results} />}
        </div>
      </div>
    </div>
  )
}
