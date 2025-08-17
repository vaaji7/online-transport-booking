import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const BookingContext = createContext()

const KEY = 'otb_bookings_v1'

export function BookingProvider({children}){
  const [bookings, setBookings] = useState(()=>{
    try{
      return JSON.parse(localStorage.getItem(KEY)) || []
    }catch(e){ return [] }
  })

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(bookings))
  },[bookings])

  function addBooking({trip, date, seats, name, phone}){
    const id = 'BKG-' + Math.random().toString(36).slice(2,8).toUpperCase()
    const rec = {
      id,
      tripId: trip.id,
      from: trip.from,
      to: trip.to,
      departure: trip.departure,
      arrival: trip.arrival,
      mode: trip.mode,
      price: trip.price,
      date,
      seats,
      name,
      phone,
      createdAt: new Date().toISOString()
    }
    setBookings(prev => [rec, ...prev])
  }

  function cancelBooking(id){
    if(confirm('Cancel this booking?')){
      setBookings(prev => prev.filter(b => b.id !== id))
    }
  }

  function getBookedSeats(tripId, date){
    return bookings
      .filter(b => b.tripId === tripId && b.date === date)
      .flatMap(b => b.seats)
  }

  const value = useMemo(()=>({ bookings, addBooking, cancelBooking, getBookedSeats }), [bookings])

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBookings(){
  const ctx = useContext(BookingContext)
  if(!ctx) throw new Error('useBookings must be used within BookingProvider')
  return ctx
}
