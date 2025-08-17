import SearchForm from '../components/SearchForm.jsx'

export default function Home(){
  return (
    <div className="grid cols-2">
      <div>
        <h2>Find your ride</h2>
        <p className="small">Search bus and train schedules, pick seats, and book—demo frontend only.</p>
        <SearchForm />
      </div>
      <div className="card">
        <h3>How it works</h3>
        <ol>
          <li>Enter route, date, mode and passengers.</li>
          <li>Choose a trip from results.</li>
          <li>Select seats and confirm.</li>
          <li>See bookings in “My Bookings”.</li>
        </ol>
        <p className="small">Data is stored locally in your browser (no backend).</p>
      </div>
    </div>
  )
}
