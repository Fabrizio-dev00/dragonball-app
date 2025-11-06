import React from 'react'

export default function Hero({ title, subtitle }) {
  return (
    <div className="p-4 mb-4 bg-light rounded-3 text-center">
      <h1 className="display-5 fw-bold">{title}</h1>
      <p className="lead">{subtitle}</p>
    </div>
  )
}
