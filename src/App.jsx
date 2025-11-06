import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Entities from './pages/Entities';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: '1200px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entities" element={<Entities />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
