
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  query: string
  onSearch(query: string): void
}

export const SearchForm = ({
  onSearch,
  query: parentQuery
}: Props) => {
  const [query, setQuery] = useState(parentQuery)

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => { setQuery(parentQuery) }, [parentQuery])

  useEffect(() => {
    const handler = setTimeout(() => onSearch(query), 400)
    return () => clearTimeout(handler)
  }, [query])

  const search = (query: string) => { onSearch(query) }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Albums" ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)} />

        <button className="btn btn-outline-secondary"
          onClick={() => search(query)}>Search</button>
      </div>
    </div>
  )
}