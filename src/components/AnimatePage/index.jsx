import { motion } from "framer-motion";
import HeaderPagesLayout from "../Layouts/HeaderPagesLayout";
import { useLocation } from "react-router-dom";

const animations = {
  initial: { opacity: 0, x: window.innerWidth },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -window.innerWidth },
};
export default function AnimatePage({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ width: "100%" }}
    >
      <HeaderPagesLayout />
      {children}
    </motion.div>
  );
}
