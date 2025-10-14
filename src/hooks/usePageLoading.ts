// usePageLoading.ts
import { useEffect, useState } from "react";



export const usePageLoading = (delay: number = 400): boolean => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
