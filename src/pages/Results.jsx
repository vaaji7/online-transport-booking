import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TripList from '../components/TripList.jsx'
import tripsData from '../data/trips.json'
import { useBookings } from '../context/BookingContext.jsx'

function useQuery(){
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function Results(){
  const params = useQuery()
  const from = params.get('from') || ''
  const to = params.get('to') || ''
  const mode = params.get('mode') || 'bus'
  const date = params.get('date') || ''
  const passengers = Number(params.get('passengers') || 1)

  const { getBookedSeats } = useBookings()
  const [items, setItems] = useState([])

  useEffect(()=>{
    const matched = tripsData.filter(t =>
      t.from === from && t.to === to && t.mode === mode
    )
    const decorated = matched.map(trip => {
      const booked = getBookedSeats(trip.id, date)
      return { trip, bookedSeatsCount: booked.length }
    })
    setItems(decorated)
  },[from,to,mode,date,passengers])

  return (
    <div className="grid">
      <div className="card">
        <strong>Results</strong>
        <div className="small">Route: {from} → {to} | Date: {date} | Mode: {mode.toUpperCase()} | Passengers: {passengers}</div>
      </div>
      <TripList items={items} />
    </div>
  )
}
