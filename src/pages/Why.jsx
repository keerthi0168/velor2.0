import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "../components/PageTransition";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reasons = [
  ["01", "WE THINK BEFORE WE CREATE.", "Every design, campaign and piece of content starts with an idea and a purpose."],
  ["02", "WE MAKE BRANDS STAND OUT.", "We don't believe in templates or copy-paste creativity. We create visuals and campaigns designed around your brand."],
  ["03", "WE UNDERSTAND DIGITAL.", "From social media and paid advertising to websites and motion, we create for the way people experience brands today."],
  ["04", "WE CARE ABOUT THE DETAILS.", "Typography, colour, movement, composition and messaging. Every detail has a role."],
  ["05", "WE MOVE FAST.", "Ideas shouldn't spend weeks sitting in a pipeline. We keep the process focused, flexible and moving."],
  ["06", "WE'RE BUILT TO CREATE.", "Velor brings strategy, design, content, advertising and technology together under one creative direction."],
];

export default function Why() {
  const root = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".reason");
    const nums = gsap.utils.toArray(".num");

    gsap.set([...items.slice(1), ...nums.slice(1)], { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-stage",
        start: "top top",
        end: `+=${reasons.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    items.forEach((el, i) => {
      if (i > 0) {
        tl.to(items[i - 1], { opacity: 0, y: -60, duration: 0.5 })
          .to(nums[i - 1], { opacity: 0, y: -60, duration: 0.5 }, "<")
          .to(el, { opacity: 1, y: 0, duration: 0.5 })
          .to(nums[i], { opacity: 1, y: 0, duration: 0.5 }, "<");
      }
      tl.to({}, { duration: 1 });
    });
  }, { scope: root });

  return (
    <PageTransition>
      <div ref={root}>
        <section className="page-hero">
          <p className="label">WHY VELOR</p>
          <h1>WHY CHOOSE<br />VELOR?</h1>
          <p className="sub">
            Because good advertising isn't just about being seen.<br />
            It's about being remembered.
          </p>
        </section>

        <section className="why-stage">
          <div className="num-col">
            {reasons.map(([n]) => <span className="num" key={n}>{n}</span>)}
          </div>
          <div className="reason-col">
            {reasons.map(([n, title, text]) => (
              <div className="reason" key={n}>
                <h2 className="big">{title}</h2>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="closing">
          <h2 className="big">YOUR BRAND.<br />OUR CREATIVITY.<br />LET'S MAKE IT MATTER.</h2>
        </section>
      </div>
    </PageTransition>
  );
}