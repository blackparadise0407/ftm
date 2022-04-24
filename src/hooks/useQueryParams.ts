import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';

export default function useQueryParams<T>(): [
  T,
  (queries: Partial<T>) => void
] {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => qs.parse(search) as unknown as T, [search]);

  const updateQuery = useCallback(
    (queries: Partial<T>) => {
      navigate(pathname + '?' + qs.stringify({ ...params, ...queries }), {
        replace: true,
      });
    },
    [params, pathname, navigate]
  );

  return [params, updateQuery];
}
