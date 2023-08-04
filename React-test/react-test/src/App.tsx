/* import { useEffect } from 'react'


import axios from 'axios'; */
import { RouterProvider } from "react-router-dom";
import './App.css'
import { Header } from './components/Header'
import { router } from "./components/Router";
// import { IPersson } from './models/IPersson';


function App() {
  /*
    useEffect(() => {
      const getData = async () => {
        const respons = await axios.get("https://swapi.dev/api/people/1/");
        console.log(respons.data);
      }
  
      getData();
    });
    
    <RouterProvider router={router} />
  return <div className="app">
    <Header />
    
  </div>*/

  return <><RouterProvider router={router} />

    <Header />
  </>




}

export default App

