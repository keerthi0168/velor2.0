import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  ["PROJECT 01", "Branding / Identity"],
  ["PROJECT 02", "Social Campaign"],
  ["PROJECT 03", "Advertising"],
  ["PROJECT 04", "Digital Experience"],
];

export default function Work() {
  const root = useRef();

  useGSAP(() => {
    gsap.from(".project", {
      y: 80, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".work-grid", start: "top 80%" },
    });
  }, { scope: root });

  return (
    <section className="work" ref={root}>
      <p className="label">SELECTED WORK</p>
      <h2 className="big">SEE WHAT WE'VE<br />BEEN MAKING.</h2>
      <div className="work-grid">
        {projects.map(([name, type]) => (
          <article className="project" key={name}>
            <span>{name}</span>
            <small>{type}</small>
          </article>
        ))}
      </div>
      <Link to="/work" className="btn ghost">VIEW ALL WORK →</Link>
    </section>
  );
}