import { useEffect } from 'react'


import axios from 'axios';
import { RouterProvider } from "react-router-dom";
import './App.css'
import { Header } from './components/Header'
import { router } from "./components/Router";
import { Footer } from "./components/Footer";
// import { IPersson } from './models/IPersson';
// https://transfermarkt-api.vercel.app/docs#/

function App() {


  interface Country {
    name: {
      common: string;
    };
  }

  // const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Country[]>(
          'https://restcountries.com/v3.1/region/europe'
        );
        const countries = response.data;
        countries.forEach((country) => {
          console.log(country.name.common);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();

  });

  return <><RouterProvider router={router} />

    <Header />
    <Footer></Footer>


  </>




}

export default App

