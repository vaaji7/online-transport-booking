import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CITIES = ['Chennai','Bengaluru','Pondicherry','Hyderabad','Coimbatore','Mumbai','Delhi']

export default function SearchForm(){
  const [from,setFrom] = useState('Chennai')
  const [to,setTo] = useState('Bengaluru')
  const [date,setDate] = useState(() => {
    const d = new Date()
    return d.toISOString().slice(0,10)
  })
  const [mode,setMode] = useState('bus')
  const [passengers,setPassengers] = useState(1)
  const navigate = useNavigate()

  function swap(){
    const f = from; setFrom(to); setTo(f)
  }

  function onSubmit(e){
    e.preventDefault()
    navigate(`/results?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}&mode=${mode}&passengers=${passengers}`)
  }

  return (
    <form className="card form" onSubmit={onSubmit}>
      <div className="row">
        <div>
          <label>From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)}>
            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label>To</label>
          <select value={to} onChange={e=>setTo(e.target.value)}>
            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
        </div>
        <div>
          <label>Mode</label>
          <select value={mode} onChange={e=>setMode(e.target.value)}>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div>
          <label>Passengers</label>
          <input type="number" min="1" max="6" value={passengers} onChange={e=>setPassengers(e.target.value)} />
          <div className="helper">Up to 6 seats per booking</div>
        </div>
        <div className="align-right">
          <button className="primary" type="submit">Search Trips</button>
          <button className="button" type="button" onClick={swap} style={{marginLeft:8}}>Swap</button>
        </div>
      </div>
    </form>
  )
}
