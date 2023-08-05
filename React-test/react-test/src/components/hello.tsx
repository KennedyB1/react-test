import { Link } from "react-router-dom";

export const Hellow = () => {
    //  const age: number = 12;

    const numbers = [1, 2, 22, 4];

    return <div className="side-chant"><h2>Chants</h2><ul>
        {
            numbers.map((i, index) => <li key={index}><Link to={`/starwars/${i}`}>{i}</Link></li>)
        }

    </ul>
    </div>

}
