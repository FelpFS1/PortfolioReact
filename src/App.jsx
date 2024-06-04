import { RouterProvider, useLocation } from "react-router-dom";
import router from "./routers/router";
import { AnimatePresence } from "framer-motion";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
