import { useLocation } from '@reach/router';
import { isBrowser } from 'utils/isBrowser';

export type UseQueryParamsName = 'forbuilder' | 'plantype';
export type UseQueryParamsReturn = (name: UseQueryParamsName) => string | null;

export const useQueryParams = (): UseQueryParamsReturn => {
  const location = useLocation();

  if (!isBrowser) {
    return () => null;
  }

  const params = new URLSearchParams(location.search);
  return params.get.bind(params);
};
