import { Link } from "react-router-dom";

export const Home = () => {

    const continent = ['Europe', 'Africa', 'Asia', 'Americas'];

    return <div><h2>Continents</h2><ul>
        {
            continent.map((i, index) => 
            <li key={index} className='linkButton'>
                <Link to={`/${i}`}>{i}</Link></li>)
        }

    </ul>
    </div>

};