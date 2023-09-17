import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';

export const EuLeague = () => {

  const { nation, league } = useParams();
  const [teams, setTeams] = useState<ITeam[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();

        // Check if the nation and league parameters exist in your data
        const validData = data.some((team: ITeam) => {
            return team.nation === nation && team.League?.name === league;
          });
  
          if (!validData) {
            // Neither nation nor league exists, navigate to a Not Found page
            navigate('/not-found');
            return;
          }

        // Filter teams by nation and league name
        const filteredTeams = data.filter(
          (team: ITeam) =>
            team.nation === nation && team.League?.name === league
        );

        setTeams(filteredTeams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation, league, navigate]);


  return (
    <>
      <div>
        <h1>Country: {nation}</h1>
        <h2>League: {league}</h2>
        {teams && (
          <div>
            <ul>
              {teams.map((team: ITeam, index) => (
                <li key={index}>
                  <Link to={`/europe/${nation}/${team.League?.name}/${team.team}`}>
                    {team.team}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
