import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const platforms = [
  { id: "instagram", name: "Instagram" },
  { id: "facebook", name: "Facebook" },
  { id: "x", name: "X" },
  { id: "youtube", name: "YouTube" },
  { id: "tiktok", name: "TikTok" },
];

export default function Phone() {
  const [i, setI] = useState(0);
  const p = platforms[i];

  // cursor-follow tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });
  const rotateY = useTransform(sx, [-1, 1], [-14, 14]);
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);

  useEffect(() => {
    const move = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <div className="phone-wrap">
      <motion.div
        className="phone"
        style={{ rotateX, rotateY }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setI((i + 1) % platforms.length)}
      >
        <div className="notch" />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={p.id}
            className={`app ${p.id}`}
            initial={{ opacity: 0, scale: 1.4, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(14px)" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {p.name}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <p className="tap-hint">TAP THE SCREEN</p>
    </div>
  );
}