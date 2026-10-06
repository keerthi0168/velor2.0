import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Split = ({ text }) =>
  text.split("").map((c, i) => (
    <span className="ch" key={i}>{c === " " ? "\u00A0" : c}</span>
  ));

export default function Attention() {
  const root = useRef();

  useGSAP(() => {
    const fromCenter = { each: 0.02, from: "center" };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "+=700%",
        scrub: 1,
        pin: true,
      },
    });

    tl
      // 1. headline in
      .from(".dont .ch", { yPercent: 110, opacity: 0, stagger: 0.03, duration: 0.6 })
      .to({}, { duration: 0.4 })

      // 2. point appears and grows
      .fromTo(".dot", { scale: 0, opacity: 1 }, { scale: 1, opacity: 1, duration: 0.5 })
      .to(".dot", { scale: 2.5, duration: 0.6 })

      // 3. ripple + letters bend
      .fromTo(".ripple",
        { width: 0, height: 0, opacity: 1 },
        { width: "250vmax", height: "250vmax", opacity: 0, duration: 1.4, ease: "power2.out" })
      .to(".dont .ch", { skewX: 28, scaleY: 1.5, duration: 0.4, stagger: fromCenter }, "<0.1")
      .to(".dont .ch", { skewX: 0, scaleY: 1, duration: 0.5, stagger: fromCenter }, ">-0.4")
      .to(".dot", { opacity: 0, duration: 0.2 }, "<")

      // 4. stillness, then STOP
      .to(".dont", { opacity: 0, duration: 0.4 }, "+=0.3")
      .set(".stop-wrap", { opacity: 1 })
      .from(".stop-top", { opacity: 0, y: 30, duration: 0.5 })
      .fromTo(".stop-word", { opacity: 0, scale: 2.4 }, { opacity: 1, scale: 1, duration: 0.06, ease: "none" })
      .fromTo(".flash", { opacity: 0.9 }, { opacity: 0, duration: 0.3 })
      .to({}, { duration: 0.8 })
      .to(".stop-wrap", { opacity: 0, duration: 0.4 })

      // 5. LOOK
      .fromTo(".w-look", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 })
      .fromTo(".frag", { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.15, stagger: { each: 0.12 } }, "<")
      .to(".frag", { opacity: 0, duration: 0.15, stagger: 0.08 }, "+=0.2")
      .to(".w-look", { opacity: 0, duration: 0.3 })

      // 6. FEEL
      .fromTo(".w-feel",
        { opacity: 0, filter: "blur(30px)", scale: 1.2 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.2 })
      .to(".w-feel", { opacity: 0, filter: "blur(30px)", duration: 0.8 }, "+=0.4")

      // 7. REMEMBER, then logo
      .fromTo(".w-remember", { opacity: 0 }, { opacity: 1, duration: 0.6 })
      .to({}, { duration: 0.8 })
      .fromTo(".velor-mark", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 });
  }, { scope: root });

  return (
    <section className="attention" ref={root}>
      <div className="stage">
        <h2 className="big dont">
          <Split text="WE DON'T DO" /><br /><Split text="BORING." />
        </h2>

        <div className="dot" />
        <div className="ripple" />

        <div className="stop-wrap">
          <h2 className="big stop-top">WE MAKE PEOPLE</h2>
          <h2 className="big stop-word">STOP.</h2>
        </div>

        <h2 className="big word w-look">LOOK.</h2>
        <div className="frags">
          {["Aa", "▶", "♥", "AD", "◼", "UI", "✦"].map((f, i) => (
            <span className="frag" key={i} style={{ "--i": i }}>{f}</span>
          ))}
        </div>
        <h2 className="big word w-feel">FEEL.</h2>
        <h2 className="big word w-remember">REMEMBER.</h2>
        <div className="velor-mark">VELOR</div>

        <div className="flash" />
      </div>
    </section>
  );
}