import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <About />,
        index: true,
      },
      {
        element: <Projects />,
        path: "works",
      },
      {
        element: <Contact />,
        path: "contact",
      },
    ],
  },
]);

export default router;
