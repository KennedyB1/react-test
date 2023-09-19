import { useEffect, useState } from 'react';
import { ITeam } from '../models/ITeam';
import { fetchData } from '../services/fetchService';
import { useParams } from 'react-router-dom';
import { SideBar } from './sideBar';
import { BackButton } from './history';

export const ChantView = () => {
  const { nation, chantName } = useParams<{ nation: string; chantName?: string }>();
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
    <>
      <SideBar />
      <BackButton />
      <div>
        {team ? (
          <div>
                     
            {team.chant && chantName && team.chant[chantName] ? (
              <div>
                
                <ul>
                  {team.chant[chantName].map((detail, index) => (
                    <li key={index}>
                    <h1>Lag: {team.team}</h1>
                    <h2>Ramsa: {chantName}</h2>
                      <p>Model: {detail.model}</p>
                      <p>Song: {detail.song}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Error, chant {chantName} does not exist</p>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
