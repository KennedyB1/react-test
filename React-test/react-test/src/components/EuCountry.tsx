import { useLocation } from 'react-router-dom';
import { Country } from '../models/Country';
import { Hellow } from './sideBar';

export const EuCountry = () => {
    const location = useLocation();
    const country = location.state?.country as Country;
    
    return (
        <>
        <div>
            <h1>Country: {country.name.common}</h1>
        </div>
        <Hellow />
        </>
    );
};
