import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Phone from "../components/Phone";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef();

  useGSAP(() => {
    gsap.from(".reveal", {
      y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3,
    });
  }, { scope: root });

  return (
    <section className="hero" ref={root}>
      <div className="hero-text">
        <h1 className="reveal">YOUR BRAND<br />DESERVES TO<br />BE FELT.</h1>
        <p className="reveal">We turn ideas into digital experiences people remember.</p>
        <div className="cta-row reveal">
          <Link to="/contact" className="btn">LET'S CREATE →</Link>
          <Link to="/work" className="btn ghost">EXPLORE OUR WORK →</Link>
        </div>
      </div>
      <Phone />
      <div className="concept">ONE BRAND. MANY SCREENS. ONE DIGITAL WORLD.</div>
    </section>
  );
}
