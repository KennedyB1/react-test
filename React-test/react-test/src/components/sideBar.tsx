import { Link } from "react-router-dom";
//import { Country } from "../models/Country";

export const Hellow = () => {
    //  const age: number = 12;
   // const location = useLocation();
   // const country = location.state?.country as Country;

    const numbers = [1, 2, 22, 4];

    return <div className="side-chant"><h2>Chants</h2><ul>
        {
            numbers.map((i, index) => <li key={index}><Link to={ `${i}`}>{i}</Link></li>)
        }

    </ul>
    </div>

}
