import { useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import tripsData from '../data/trips.json'
import SeatMap from '../components/SeatMap.jsx'
import BookingSummary from '../components/BookingSummary.jsx'
import { useBookings } from '../context/BookingContext.jsx'

export default function SelectSeats(){
  const { tripId } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const date = params.get('date') || ''
  const passengers = Number(params.get('passengers') || 1)

  const trip = useMemo(()=> tripsData.find(t => t.id === tripId), [tripId])
  const { getBookedSeats, addBooking } = useBookings()
  const bookedSeats = getBookedSeats(trip.id, date)

  const [selected, setSelected] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  function onSelect(seat){
    const idx = selected.indexOf(seat)
    if(idx >= 0){
      setSelected(prev => prev.filter(s => s !== seat))
    } else {
      if(selected.length >= passengers) return
      setSelected(prev => [...prev, seat])
    }
  }

  function onConfirm(){
    if(selected.length !== passengers){
      alert(`Please select exactly ${passengers} seat(s).`)
      return
    }
    if(!name || !phone){
      alert('Enter name and phone.')
      return
    }
    addBooking({
      trip,
      date,
      seats: selected,
      name,
      phone
    })
    navigate('/bookings')
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <h3>{trip.operator} — {trip.mode.toUpperCase()}</h3>
        <div className="small">{trip.id} | {trip.from} → {trip.to} | {trip.departure} – {trip.arrival}</div>
        <hr/>
        <SeatMap trip={trip} bookedSeats={bookedSeats} selectedSeats={selected} onSelect={onSelect} />
      </div>
      <div className="grid">
        <BookingSummary trip={trip} selectedSeats={selected} onConfirm={onConfirm} />
        <div className="card">
          <h3>Passenger Details</h3>
          <div className="form">
            <div>
              <label>Name</label>
              <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label>Phone</label>
              <input className="input" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="10-digit phone" />
            </div>
            <div className="small">Seats selected: {selected.join(', ') || 'None'} (max {passengers})</div>
          </div>
        </div>
      </div>
    </div>
  )
}
