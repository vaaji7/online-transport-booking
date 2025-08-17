import { formatCurrency } from '../utils/format.js'

export default function BookingSummary({trip, selectedSeats, onConfirm}){
  const total = trip.price * selectedSeats.length
  return (
    <div className="card">
      <h3>Booking Summary</h3>
      <div>Trip: <strong>{trip.from}</strong> → <strong>{trip.to}</strong> ({trip.mode.toUpperCase()})</div>
      <div>Seats: {selectedSeats.join(', ') || 'None'}</div>
      <div>Total: ₹ {formatCurrency(total)}</div>
      <button className="primary" disabled={!selectedSeats.length} onClick={onConfirm}>Confirm Booking</button>
    </div>
  )
}
