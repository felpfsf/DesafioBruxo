import { useEffect, useState } from 'react'

export const useFecthCharacters = url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharactersData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const charcterData = await response.json()
        setData(charcterData)
      } catch (error) {
        setError('Ocorreu um erro')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCharactersData()
  }, [url])

  return { data, loading, error }
}
