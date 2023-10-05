import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Continent } from "./Continent";  // renamed from Europe to Continent
import { CountryList } from "./CountryList";
import { Layout } from "./Layout";
import { EuLeague } from "./EuLeague";
import { EuTeam } from "./EuTeam";
import { ChantView } from "./chantView";
import { NotFoundPage } from "./NotFoundPage ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/:continentName",
        element: <Continent />,   // renamed from Europe to Continent
      },
      {
        path: "/:continentName/:nation",
        element: <CountryList />,  
      },
      {
        path: "/:continentName/:nation/:league",
        element: <EuLeague />,
      },
      {
        path: "/:continentName/:nation/:league/:team",
        element: <EuTeam />,
      },
      {
        path: "/:continentName/:nation/:league/:team/:chantName",
        element: <ChantView />,
      },
    ],
  },
]);
