import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ITeam } from '../models/ITeam';
import { fetchData } from '../services/fetchService';
import { BackButton } from './history';

type ParamsType = {
  [key: string]: string | undefined;
};


export const Continent = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const { continentName } = useParams<ParamsType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const teamData: ITeam[] = await fetchData();
        const continentTeamsData = teamData.filter((team) => team.continent === continentName);

        // Create a Set to keep track of unique nation names
        const uniqueNations = new Set<string>();

        // Filter out duplicates based on nation name
        const uniqueContinentTeamsData = continentTeamsData.filter((team) => {
          if (!uniqueNations.has(team.nation)) {
            uniqueNations.add(team.nation);
            return true;
          }
          return false;
        });

        // Sort the teams alphabetically based on the 'nation' property
        uniqueContinentTeamsData.sort((a, b) => a.nation.localeCompare(b.nation));

        setTeams(uniqueContinentTeamsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [continentName]);

  return (
    <>
      <BackButton />
      <h2>{continentName} nations</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <Link to={`/${continentName}/${team.nation}`}><img src={team.flag} alt={`${team.nation}'s flag`} />{team.nation}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
