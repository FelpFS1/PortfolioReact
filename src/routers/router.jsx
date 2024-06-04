import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/Layouts/RootLayout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ErrorElement from "../pages/error-page";
import AnimatePage from "../components/AnimatePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    errorElement: <ErrorElement />,

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
