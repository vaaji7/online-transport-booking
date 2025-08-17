import { useNavigate, useSearchParams } from 'react-router-dom'
import { formatCurrency, calcDuration } from '../utils/format.js'

export default function TripCard({trip, bookedSeatsCount}){
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const passengers = Number(params.get('passengers') || 1)
  const remaining = trip.totalSeats - bookedSeatsCount

  function go(){
    navigate(`/select/${trip.id}?` + params.toString())
  }

  return (
    <div className="card trip">
      <div>
        <div className="rowline">
          <span className="badge">{trip.mode.toUpperCase()}</span>
          <strong>{trip.operator}</strong>
          <span className="small">{trip.id}</span>
        </div>
        <div className="rowline" style={{marginTop:6}}>
          <div><strong>{trip.from}</strong> → <strong>{trip.to}</strong></div>
          <div className="small" style={{marginLeft:8}}>{trip.departure} – {trip.arrival} ({calcDuration(trip.departure, trip.arrival)})</div>
        </div>
        <div className="rowline" style={{marginTop:6}}>
          <span className={"badge " + (remaining>10? "green" : "yellow")}>{remaining} seats left</span>
          <span className="badge">₹ {formatCurrency(trip.price)} / seat</span>
        </div>
      </div>
      <div>
        <button className="primary" disabled={remaining < passengers} onClick={go}>
          {remaining >= passengers ? "Select Seats" : "Not Enough Seats"}
        </button>
      </div>
    </div>
  )
}
