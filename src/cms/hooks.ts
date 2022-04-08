import { useEffect } from 'react';

export const useBuilderMode = () => {
  useEffect(() => {
    window.builderMode = true;
  }, []);
};
