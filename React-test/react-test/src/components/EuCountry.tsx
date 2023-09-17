import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';
import { Link } from 'react-router-dom';

export const EuCountry = () => {
  const { nation } = useParams();
  const [teams, setTeams] = useState<ITeam[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();

        // Check if the nation exists in your data
        const nationExists = data.some((team: ITeam) => team.nation === nation);

        if (!nationExists) {
          // Nation does not exist, navigate to a Not Found page
          navigate('/not-found');
          return;
        }

        const sortedTeams = data
          .filter((team: ITeam) => team.League) 
          .sort((a: ITeam, b: ITeam) => a.League.tier - b.League.tier);

        setTeams(sortedTeams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation, navigate]);

  // Filter the teams again to keep only those with the correct nation
  const filteredTeams = teams?.filter((team: ITeam) => team.nation === nation);

  return (
    <>
      <div>
        <h1>Country: {nation}</h1>
        {filteredTeams && (
          <div>
            <h2>Leagues:</h2>
            <ul>
              {filteredTeams.map((team: ITeam, index) => (
                <li key={index}>
                  <Link to={`/europe/${nation}/${team.League.name}`}>
                    {team.League.name}
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
