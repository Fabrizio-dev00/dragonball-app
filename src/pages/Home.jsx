import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters?limit=20')
      .then(res => {
        setCharacters(res.data.items || res.data || [])
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Hero
        title="Dragon Ball Explorer"
        subtitle="Explora personajes del universo Dragon Ball con esta app hecha en React."
      />

      {loading && <p>Cargando personajes...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {characters.slice(0, 9).map((character, index) => (
          <div className="col" key={index}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  )
}
