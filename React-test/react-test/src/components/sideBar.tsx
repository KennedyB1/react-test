import '../style/sidebar.css';
import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';

export const SideBar = () => {
  const { nation, league, continentName } = useParams();
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();
        
        // Filter teams by nation and league
        const filteredTeams = data.filter(
          (t: ITeam) =>
            t.nation === nation && t.League?.name === league
        );

        setTeams(filteredTeams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation, league]);

  return (
    <aside>
      <div className="sidebar">
        {teams.map((team: ITeam) => (
          <div key={team.id}>
            <Link to={`/${team.continent}/${team.nation}/${league}/${team.team}`}>
              <h1>{team.team}</h1>
            </Link>
            <ul>
              {team.chant &&
                Object.keys(team.chant).map((chantName, index) => (
                  <li key={index}>
                    <Link
                      to={`/${continentName}/${team.nation}/${league}/${team.team}/${chantName}`}
                    >
                      {chantName}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};


