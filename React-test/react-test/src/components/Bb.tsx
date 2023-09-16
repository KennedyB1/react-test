import { Link } from "react-router-dom";

export const Bb = () => {

    const continent = ['Europe', 'Africa', 'Asia', 'NA', 'CA', 'SA'];

    return <div><h2>Continents</h2><ul>
        {
            continent.map((i, index) => <li key={index}><Link to={`/${i}`}>{i}</Link></li>)
        }

    </ul>
    </div>

};