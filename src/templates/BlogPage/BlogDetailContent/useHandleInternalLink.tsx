import { navigate } from 'gatsby';
import { MutableRefObject, useEffect } from 'react';
import { isBrowser } from 'utils/isBrowser';

export const useHandleInternalLink = (rootRef: MutableRefObject<HTMLElement | null>) => {
  const handleWindowClick = (event: MouseEvent) => {
    const el = event.target as HTMLElement;
    if (rootRef.current && rootRef.current.contains(el)) {
      if (el.tagName.toLowerCase() === 'a') {
        if (origin && (el as HTMLAnchorElement).href.includes(origin)) {
          event.preventDefault();
          navigate(el.getAttribute('href') as string);
        }
      } else if (!!el.closest('a')) {
        if (origin && (el.closest('a') as HTMLAnchorElement).href.includes(origin)) {
          event.preventDefault();
          navigate((el.closest('a') as HTMLAnchorElement).getAttribute('href') as string);
        }
      }
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('click', handleWindowClick);
      return () => {
        window.removeEventListener('click', handleWindowClick);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
