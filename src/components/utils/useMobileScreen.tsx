import { useState, useEffect } from 'react';
import { getDesignTokens } from '../../designTokens';

export function useWindowWidth() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth<480);

  useEffect(() => {
    // Function to update windowWidth when the window is resized
    function handleResize() {
        setIsMobile(window.innerWidth<480);
    }

    // Add a listener to the window's resize event
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}