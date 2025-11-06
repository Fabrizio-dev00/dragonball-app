import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters')
      .then(res => setCharacters(res.data.items || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <div className="bg-light p-5 text-center rounded-4 shadow-sm mb-4">
        <h1 className="fw-bold">Dragon Ball Explorer</h1>
        <p className="text-muted">
          Explora personajes del universo Dragon Ball con esta app hecha en React y Bootstrap.
        </p>
      </div>

      <div className="row g-4">
        {characters.slice(0, 12).map((char) => (
          <div key={char.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={char.image}
                className="card-img-top img-fluid"
                alt={char.name}
                style={{ height: '280px', width: 'auto', objectFit: 'cover', objectPosition: 'center', padding: '10px' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{char.name}</h5>
                <p className="mb-1">
                  <strong>Raza:</strong> {char.race || '—'}
                </p>
                <p className="mb-0">
                  <strong>Origen:</strong> {char.originPlanet || '—'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
