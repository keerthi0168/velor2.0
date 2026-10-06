import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final">
      <h2 className="big">LET'S MAKE<br />SOMETHING<br />UNMISSABLE.</h2>
      <p>Have a brand, campaign or idea ready to move?</p>
      <Link to="/contact" className="btn">START A PROJECT →</Link>
    </section>
  );
}