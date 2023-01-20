import { useRoutes } from "react-router-dom";
import Nav from "./layouts/Nav";
import NavFoot from "./layouts/NavFoot";
import Hero from "./pages/Hero";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Patients from "./pages/Patients";
import Patient from "./pages/Patient";
import Report from "./pages/Report";
import PostReport from "./pages/PostReport";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [
        {
          path: "",
          element: <Hero />,
        },
      ],
    },
    {
      path: "/app",
      element: <Nav />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "patients",
          element: <Patients />,
        },
        {
          path: "patient/:id",
          element: <Patient />,
        },
        {
          path: "report/:rid/:pid",
          element: <Report />,
        },
        {
          path: "reportpost/:id",
          element: <PostReport />,
        },
      ],
    },
  ]);
}
