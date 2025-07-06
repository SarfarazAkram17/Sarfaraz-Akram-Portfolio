import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layout/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/project/:projectName",
        Component: ProjectDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
