import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  ["SOCIAL MEDIA", "Strategy, content & creative direction"],
  ["ADVERTISING", "Paid campaigns & digital performance"],
  ["BRANDING", "Identity, visual systems & direction"],
  ["CONTENT", "Graphics, reels & campaign visuals"],
  ["WEB", "Websites & digital experiences"],
  ["MOTION", "Motion graphics & visual storytelling"],
];

export default function Services() {
  const root = useRef();

  useGSAP(() => {
    gsap.from(".big", {
      y: 60, opacity: 0, duration: 1,
      scrollTrigger: { trigger: ".big", start: "top 85%" },
    });
    gsap.utils.toArray(".service").forEach((el) => {
      gsap.from(el, {
        y: 80, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });
  }, { scope: root });

  return (
    <section className="services" ref={root}>
      <p className="label">WHAT WE DO</p>
      <h2 className="big">WE MAKE BRANDS<br />MOVE.</h2>
      <div className="service-list">
        {services.map(([title, desc]) => (
          <div className="service" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
