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

  // const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      const respons = await axios.get("https://transfermarkt-api.vercel.app/clubs/search/Hammarby");
      // setName(respons.data.name);
      console.log(respons)
    }

    getData();

  });

  return <><RouterProvider router={router} />

    <Header />
    <Footer></Footer>


  </>




}

export default App

