import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Country } from '../models/Country';

export const Europe = () => {
    
    // https://restcountries.com/#endpoints-region
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get<Country[]>(
                    'https://restcountries.com/v3.1/region/europe'
                );
                const countriesData = response.data;
                setCountries(countriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className="countries">
            <h2>Europe</h2>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        <Link to={`${country.name.common}`} state={{ country }} >
                            {country.name.common} <img src={country.flags.svg} alt={`${country.name.common} flag`} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
