import { motion } from "framer-motion";
import HeaderPagesLayout from "../Layouts/HeaderPagesLayout";
import { useLocation } from "react-router-dom";

const animations = {
  initial: { x: window.innerWidth },
  animate: { x: 0 },
  exit: { x: -window.innerWidth },
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
    >
      <HeaderPagesLayout />
      {children}
    </motion.div>
  );
}
