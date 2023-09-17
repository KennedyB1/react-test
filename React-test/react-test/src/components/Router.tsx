import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Europe } from "./Europe";
import { EuCountry } from "./EuCountry";
import { Layout } from "./Layout";
import { EuLeague } from "./EuLeague";
import { EuTeam } from "./EuTeam";
import { ChantView } from "./chantView";
import { NotFoundPage } from "./NotFoundPage ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/Europe",
        element: <Europe />,
      },
      {
        path: "/Europe/:nation",
        element: <EuCountry />,
      },
      {
        path: "/Europe/:nation/:league",
        element: <EuLeague />,
      },
      {
        path: "/Europe/:nation/:league/:team",
        element: <EuTeam />,
      },
      {
        path: "/Europe/:nation/:league/:team/:chantName",
        element: <ChantView />,
      },
      // Add a catch-all route for non-matching paths
      {
        path: "*",
        element: <NotFoundPage />, 
      },
    ],
  },
]);
