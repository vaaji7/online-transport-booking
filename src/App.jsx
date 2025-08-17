import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Results from './pages/Results.jsx'
import SelectSeats from './pages/SelectSeats.jsx'
import MyBookings from './pages/MyBookings.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/select/:tripId" element={<SelectSeats />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}
