import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ITeam } from '../models/ITeam';
import { fetchData } from '../services/fetchService';
import { BackButton } from './history';

export const Europe = () => {
  const [europeTeams, setEuropeTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const teamData: ITeam[] = await fetchData();
        const europeTeamsData = teamData.filter((team) => team.continent === 'Europe');

        // Create a Set to keep track of unique nation names
        const uniqueNations = new Set<string>();

        // Filter out duplicates based on nation name
        const uniqueEuropeTeamsData = europeTeamsData.filter((team) => {
          if (!uniqueNations.has(team.nation)) {
            uniqueNations.add(team.nation);
            return true;
          }
          return false;
        });

        // Sort the teams alphabetically based on the 'nation' property
        uniqueEuropeTeamsData.sort((a, b) => a.nation.localeCompare(b.nation));

        setEuropeTeams(uniqueEuropeTeamsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
    <BackButton />
      <h2>European nations</h2>
      <ul>
        {europeTeams.map((team, index) => (
          <li key={index}>
            <Link to={`/Europe/${team.nation}`}><img src={team.flag} alt={`${team.nation}'s flag`} />{team.nation}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
