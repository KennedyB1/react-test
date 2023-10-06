import '../style/sidebar.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';

export const SideBar = () => {
  const { nation, league, continentName } = useParams();
  const [team, setTeam] = useState<ITeam | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();
        const foundTeam = data.find((t: ITeam) => t.nation === nation);
        setTeam(foundTeam);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation]);

  return (
    <aside>
      <div className="sidebar">
        <Link to={`/Europe/${team?.nation}/${league}/${team?.team}`}><h1>{team?.team}</h1></Link>
        
         <ul>
          {team?.chant && Object.keys(team.chant).map((chantName, index) => (
            <li key={index}>
              <Link to={`/${continentName}/${team?.nation}/${league}/${team.team}/${chantName}`}>{chantName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

