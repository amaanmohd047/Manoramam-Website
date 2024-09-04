"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children, delay = 0, from }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  let variation;

  switch (from) {
    case "top":
      // mainControls.set({ y: "-100%" });
      variation = {
        hidden: { opacity: 0, y: "-50px" },
        visible: { opacity: 1, y: 0 },
      };
      break;
    case "bottom":
      variation = {
        hidden: { opacity: 0, y: "50px" },
        visible: { opacity: 1, y: 0 },
      };
      break;
    case "left":
      variation = {
        hidden: { opacity: 0, x: "-50px" },
        visible: { opacity: 1, x: 0 },
      };
      break;
    case "right":
      // mainControls.set({ x: "50px" });
      variation = {
        hidden: { opacity: 0, x: "50px" },
        visible: { opacity: 1, x: 0 },
      };
      break;
    default:
      variation = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: 0 },
      };
      break;
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative overflow-hidden w-full" ref={ref}>
      <motion.div
        variants={variation}
        initial="hidden"
        transition={{ duration: 0.3, delay: delay }}
        animate={mainControls}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
