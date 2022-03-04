import { isBrowser } from './isBrowser';

export const getOrigin = () => {
  if (!isBrowser) {
    return 'https://veda-builder.netlify.app';
  }
  const { origin } = window.location;
  return origin.includes('localhost') ? 'https://veda-builder.netlify.app' : origin;
};
