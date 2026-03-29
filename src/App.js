import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Board from './pages/Board'
import CarDonation from './pages/CarDonation'
import Donate from './pages/Donate'
import Support from './pages/Support'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/board" element={<Board />} />
          <Route path="/car-donation" element={<CarDonation />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
