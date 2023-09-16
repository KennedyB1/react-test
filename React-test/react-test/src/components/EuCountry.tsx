import { SideBar } from './sideBar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';

export const EuCountry = () => {
  const { nation } = useParams();
  const [team, setTeam] = useState<ITeam | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();
        console.log('Fetched Data:', data);

        const foundTeam = data.find((t: ITeam) => t.nation === nation);
        console.log('Found Team:', foundTeam);

        setTeam(foundTeam);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation]);

  console.log('Nation from URL:', nation);
  console.log('Team Data:', team);

  return (
    <>
      <SideBar />
      <div>
        <h1>Country: {team?.nation}</h1>
        {team && (
          <div>
            <p>Continent: {team.continent || 'No Data'}</p>
            {/* Include other properties here */}
          </div>
        )}
      </div>
      
    </>
  );
};
