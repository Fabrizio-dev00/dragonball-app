import React from 'react'

export default function CharacterCard({ character }) {
  const name = character?.name || 'Desconocido'
  const race = character?.race || '—'
  const origin = character?.originPlanet || '—'
  const image = character?.image || character?.imageUrl || ''

  return (
    <div className="card h-100 shadow-sm">
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ objectFit: 'cover', height: 220 }}
        />
      )}
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Raza:</strong> {race}</p>
        <p className="card-text"><strong>Origen:</strong> {origin}</p>
      </div>
    </div>
  )
}
