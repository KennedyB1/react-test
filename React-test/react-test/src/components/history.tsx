import { useNavigate, useLocation } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBackOneSegment = () => {
    const segments = location.pathname.split('/').filter(segment => segment !== ''); // Split the URL into segments and filter out empty segments
    if (segments.length > 0) {
      // Check if there are more than 0 segments
      const newSegments = segments.slice(0, -1); // Remove the last segment
      const newUrl = '/' + newSegments.join('/'); // Rejoin the segments into a new URL
      navigate(newUrl);
    }
  };

  return (
    <div>
      <button onClick={goBackOneSegment}>Go Back One Segment</button>
    </div>
  );
};
