import { createBrowserRouter } from "react-router-dom";
import { Bb } from "./Bb";
import { Hellow } from "./hello";
import { StarWars } from "./starwars";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Bb />
    },
    {
        path: "/about",
        element: <Hellow></Hellow>
    },
    {
        path: "/starwars/:id",
        element: <StarWars></StarWars>
    }




])