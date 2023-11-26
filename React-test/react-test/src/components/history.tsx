import { useNavigate, useLocation } from 'react-router-dom';
import { CSSProperties } from 'react';

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBackOneSegment = () => {
    const segments = location.pathname.split('/').filter(segment => segment !== '');
    if (segments.length > 0) {
      const newSegments = segments.slice(0, -1);
      const newUrl = '/' + newSegments.join('/');
      navigate(newUrl);
    }
  };

  // Inline CSS for the button container
  const buttonContainerStyle: CSSProperties = {
    position: 'fixed',
    top: '100px', // Adjust this value based on your header's height
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
  };

  return (
    <div style={buttonContainerStyle}>
      <button onClick={goBackOneSegment}>Go Back One Segment</button>
    </div>
  );
};
