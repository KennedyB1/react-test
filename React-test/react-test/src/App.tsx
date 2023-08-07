
import { RouterProvider } from "react-router-dom";
import './App.css'
import { Header } from './components/Header'
import { router } from "./components/Router";
// import { Footer } from "./components/Footer";
// import { IPersson } from './models/IPersson';
// https://transfermarkt-api.vercel.app/docs#/

function App() {




  return <><RouterProvider router={router} />

    <Header />



  </>




}

export default App

