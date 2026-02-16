import { NavLink } from "react-router-dom"
import "./Layout.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/shop" className="nav-link">
        Shop
      </NavLink>

      <NavLink to="/admin" className="nav-link">
        Admin Portal
      </NavLink>
    </nav>
  )
}
