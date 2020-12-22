import { useState, useEffect } from "react"

export function useSearchRequest<Params, Results>(
  getResults: (query: Params) => Promise<Results>
) {
  const [query, setQuery] = useState<Params | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Results | null>()

  const search = async (query: Params | null) => {
    if (!query) return
    try {
      setError(null)
      setLoading(true)
      setResults(null)
      const results = await getResults(query)
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

  return {
    setQuery,
    query,
    loading,
    error,
    results
  }
}