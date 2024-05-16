import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <About />,
        index: true,
      },
    ],
  },
]);

export default router;
