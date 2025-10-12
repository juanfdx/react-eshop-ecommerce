import { useEffect, useState } from 'react';
import { useNavigation, useLocation } from 'react-router';


export const useLoadingStates =() => {

  const navigation = useNavigation();
  const location = useLocation();

  const [isPageTransition, setIsPageTransition] = useState(false);
  const [isDataRefetch, setIsDataRefetch] = useState(false);

  useEffect(() => {
    if (navigation.state === 'loading') {
      const nextPath = navigation.location?.pathname;
      const currentPath = location.pathname;

      if (nextPath && nextPath !== currentPath) {
        // Navigating to a completely different route
        setIsPageTransition(true);
        setIsDataRefetch(false);
      } else {
        // Same route — likely a data reload (pagination/filter)
        setIsDataRefetch(true);
        setIsPageTransition(false);
      }
    } else {
      // When idle, reset both
      setIsPageTransition(false);
      setIsDataRefetch(false);
    }
  }, [navigation.state, navigation.location, location.pathname]);

  return { isPageTransition, isDataRefetch };
}
