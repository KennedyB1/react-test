import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Continent } from "./Continent";  // renamed from Europe to Continent
import { CountryList } from "./CountryList";
import { Layout } from "./Layout";
import { League } from "./League";
import { Team } from "./Team";
import { NotFoundPage } from "./NotFoundPage ";
import { ChantView } from "./ChantView";

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
        element: <League />,
      },
      {
        path: "/:continentName/:nation/:league/:team",
        element: <Team />,
      },
      {
        path: "/:continentName/:nation/:league/:team/:chantName",
        element: <ChantView />,
      },
    ],
  },
]);
