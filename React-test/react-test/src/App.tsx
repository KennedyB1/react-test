import { useEffect } from 'react';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { router } from './components/Router';
import { Footer } from './components/Footer';

interface Club {
  id: string;
  url: string;
  name: string;
  country: string;
  squad: string;
  marketValue: string;
}

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<Club[]>(
          'https://transfermarkt-api.vercel.app/clubs/search/Hammarby'
        );
        const data = response.data;
        const names = data.map((club: Club) => club.name);
        console.log(names);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Header />
      <Footer />
    </>
  );
}

export default App;
