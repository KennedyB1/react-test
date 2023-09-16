import { createBrowserRouter } from "react-router-dom";
import { Bb } from "./Bb";
import { Europe } from "./Europe";
import { EuCountry } from "./EuCountry";
import { Layout } from "./Layout";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Bb />,
                index: true

            },
            {
                path: "/europe",
                element: <Europe />
            },
            {
                path: "europe/:nation?",
                element: <EuCountry />
            }
        ]
    }



]);