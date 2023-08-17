import { createBrowserRouter } from "react-router-dom";
import { Bb } from "./Bb";
import { Hellow } from "./hello";
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
                path: "/about",
                element: <Hellow />
            },
            {
                path: "/europe",
                element: <Europe />
            },
            {
                path: "europe/:id",
                element: <EuCountry />
            }
        ]
    }



]);