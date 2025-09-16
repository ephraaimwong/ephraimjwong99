import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function BrainChomp() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const [isOpen, setIsOpen] = useState(false);

  // Toggle "mouth" open/close on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsOpen(latest > 0.05); // adjust threshold as needed
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div style={{ height: "300vh", background: "#f0f0f0" }}>
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "0%",
          translateY: "-50%",
          x,
          scale,
          fontSize: "3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {isOpen ? "🧠🧠" : "🧠"}
      </motion.div>
    </div>
  );
}
