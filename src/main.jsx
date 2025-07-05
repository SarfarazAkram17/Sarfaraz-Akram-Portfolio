import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layout/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";

AOS.init({ duration: 1000, anchorPlacement: "top-bottom" });

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
        path: "/project/:projectId",
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
