
import React, { useState } from 'react'

interface Props {
  onSearch(query: string): void
}


export const SearchForm = ({onSearch}: Props) => {
  const [query, setQuery] = useState('batman')

  const search = (query: string) => { onSearch(query) }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Albums"
          value={query}
          onChange={e => setQuery(e.target.value)} />

        <button className="btn btn-outline-secondary" 
          onClick={() => search(query)}>Search</button>
      </div>
    </div>
  )
}