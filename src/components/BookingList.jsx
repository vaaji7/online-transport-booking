import { useBookings } from '../context/BookingContext.jsx'
import { formatCurrency } from '../utils/format.js'

export default function BookingList(){
  const { bookings, cancelBooking } = useBookings()

  if(!bookings.length){
    return <div className="card">No bookings yet.</div>
  }

  return (
    <div className="list">
      {bookings.map(b => (
        <div key={b.id} className="card">
          <div style={{display:'flex',justifyContent:'space-between',gap:12}}>
            <div>
              <div><strong>{b.from}</strong> → <strong>{b.to}</strong> ({b.mode.toUpperCase()})</div>
              <div className="small">Trip: {b.tripId} | Date: {b.date} | Time: {b.departure} – {b.arrival}</div>
              <div>Seats: {b.seats.join(', ')} | Paid: ₹ {formatCurrency(b.price * b.seats.length)}</div>
              <div className="small">Name: {b.name} | Phone: {b.phone}</div>
            </div>
            <button onClick={()=>cancelBooking(b.id)}>Cancel</button>
          </div>
        </div>
      ))}
    </div>
  )
}
