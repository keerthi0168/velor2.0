import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="logo">VELOR</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/why">Why Velor</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}