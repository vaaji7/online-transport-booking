export default function SeatMap({ trip, bookedSeats, selectedSeats, onSelect }){
  const cols = trip.mode === 'bus' ? 4 : 6
  const total = trip.totalSeats
  const seats = Array.from({length: total}, (_,i)=> i+1)

  function toggle(seat){
    if(bookedSeats.includes(seat)) return
    onSelect(seat)
  }

  return (
    <div>
      <div style={{'--cols': cols}} className="seatgrid">
        {seats.map(n => {
          const isBooked = bookedSeats.includes(n)
          const isSelected = selectedSeats.includes(n)
          const cls = "seat " + (isBooked ? "booked" : isSelected ? "selected available" : "available")
          return (
            <div key={n} className={cls} onClick={()=>toggle(n)}>{n}</div>
          )
        })}
      </div>
      <div className="legend">
        <div className="box available" /> Available
        <div className="box selected" /> Selected
        <div className="box booked" /> Booked
      </div>
    </div>
  )
}
