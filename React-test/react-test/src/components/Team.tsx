import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../services/fetchService';
import { ITeam } from '../models/ITeam';
import { SideBar } from './sideBar';
import { BackButton } from './history';

export const Team = () => {

    const { nation, league, team } = useParams();
  const [teams, setTeams] = useState<ITeam[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();

        // Check if the nation, league, and team parameters exist in your data
        const validData = data.some((item: ITeam) => {
          return item.nation === nation && item.League?.name === league && item.team === team;
        });

        if (!validData) {
          // Either nation, league, or team does not exist, navigate to a Not Found page
          navigate('/not-found');
          return;
        }


        // Filter teams by nation and league name
        const filteredTeams = data.filter(
          (team: ITeam) =>
            team.nation === nation && team.League.name === league
        );

        setTeams(filteredTeams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeamData();
  }, [nation, league, navigate, team]);
console.log(teams)
  return (
    <>
    <BackButton />
    <SideBar />
      <div>
        <h1>Country: {nation}</h1>
        <h2>League: {league}</h2>
        <h3>Team: {team}</h3>
       
      </div>
    </>
  );
};