import { useEffect, useState } from 'react';
import axios from 'axios';

function Entities() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters')
      .then(res => setEntities(res.data.items || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Personajes (Entities)</h2>
      <div className="row g-4">
        {entities.map((e) => (
          <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm h-100 text-center">
              <img
                src={e.image}
                alt={e.name}
                className="card-img-top"
                style={{ height: '280px', width: 'auto', objectFit: 'cover', objectPosition: 'center', padding: '10px' }}
              />
              <div className="card-body">
                <h5 className="fw-semibold">{e.name}</h5>
                <p><strong>Raza:</strong> {e.race || '—'}</p>
                <p><strong>Ki Máximo:</strong> {e.maxKi || 'Desconocido'}</p>
                <p><strong>Planeta:</strong> {e.originPlanet || '—'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;
