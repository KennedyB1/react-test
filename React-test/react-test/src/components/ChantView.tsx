import { useEffect, useState } from 'react';
import { ITeam } from '../models/ITeam';
import { fetchData } from '../services/fetchService';
import { useParams } from 'react-router-dom';
import { SideBar } from './sideBar';
import { BackButton } from './history';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ChantView = () => {
  const { nation, chantName, team: selectedTeam } = useParams<{ nation: string; chantName?: string; team: string }>();
  const [team, setTeam] = useState<ITeam | null>(null);

  const videoWidth = 560;
  const videoHeight = 315;

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData();
        const foundTeam = data.find((t: ITeam) => t.nation === nation && t.team === selectedTeam);
        setTeam(foundTeam);
        // Reset selected translation whenever a new team is fetched.
        setSelectedTranslation("");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchTeamData();
    
  }, [nation, selectedTeam, chantName]); 
//Körs i början, för att återställa 'video' till index 0
  useEffect(() => {
    setCurrentSlide(0);
  }, []); 
  

  useEffect(() => {
    // Assuming that you want to default to the first translation in the list:
    if (team && chantName && team.chant[chantName] && team.chant[chantName].length > 0) {
      const firstTranslation = Object.values(team.chant[chantName][0].translate)[0];
      setSelectedTranslation(firstTranslation);
    }
  }, [team, chantName]);

  const videoData: string[] = team && chantName && team.chant[chantName]
    ? (Array.isArray(team.chant[chantName][0].video)
      ? team.chant[chantName][0].video as unknown as string[]
      : [team.chant[chantName][0].video])
    : [];

  const [selectedTranslation, setSelectedTranslation] = useState<string>("");

  const handleTranslationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const translation = event.target.value;
    setSelectedTranslation(translation);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedTranslation);
  };
  const [currentSlide, setCurrentSlide] = useState(0);

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
                      <h1>Land: {team.nation}</h1>
                      <h1>Lag: {team.team}</h1>
                      <h2>Ramsa: {chantName}</h2>
                      <p>Text: {detail.song}</p>
                      <select key={selectedTeam + chantName} onChange={handleTranslationChange}>
                        {Object.entries(detail.translate).map(([lang, translation], i) => (
                          <option key={i} value={translation}>
                            {lang}
                          </option>
                        ))}
                      </select>

                      {/* Displaying the selected translation */}
                      <p>{selectedTranslation}</p>
                      <button onClick={copyToClipboard}>Copy to Clipboard</button>
                    </li>
                  ))}
                </ul>

                <Carousel key={`${nation}-${selectedTeam}-${chantName}`}  showThumbs={false}  dynamicHeight={false} width={`${videoWidth}px`} selectedItem={currentSlide}>
                  {videoData.map((videoUrl, index) => (
                    <div key={index} style={{ width: videoWidth, height: videoHeight }}>
                      <iframe
                        width={videoWidth}
                        height={videoHeight}
                        src={videoUrl}
                        title={`YouTube video player ${index}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  ))}
                </Carousel>
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
