import TripCard from './TripCard.jsx'

export default function TripList({ items }){
  if(!items.length){
    return <div className="card">No trips matched your search.</div>
  }
  return (
    <div className="list">
      {items.map(t => <TripCard key={t.id} trip={t.trip} bookedSeatsCount={t.bookedSeatsCount} />)}
    </div>
  )
}
