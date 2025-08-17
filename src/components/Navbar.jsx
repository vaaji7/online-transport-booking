import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="inner container">
        <Link className="brand" to="/">Transit Booker</Link>
        <div className="navlinks">
          <NavLink to="/" end className="button">Search</NavLink>
          <NavLink to="/bookings" className="button">My Bookings</NavLink>
          <a className="button" href="https://react.dev" target="_blank" rel="noreferrer">Help</a>
        </div>
      </div>
    </nav>
  )
}
