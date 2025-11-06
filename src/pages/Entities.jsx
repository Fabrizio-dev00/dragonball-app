import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Entities() {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters?limit=50')
      .then(res => {
        setEntities(res.data.items || res.data || [])
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h2 className="mb-4">Listado de Entidades</h2>

      {loading && <p>Cargando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="list-group">
        {entities.map((entity, i) => (
          <div key={i} className="list-group-item">
            <h5>{entity.name}</h5>
            <p><strong>Raza:</strong> {entity.race}</p>
            <p><strong>Género:</strong> {entity.gender}</p>
            <p><strong>Origen:</strong> {entity.originPlanet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
