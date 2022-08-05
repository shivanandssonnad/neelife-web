import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function useQueryState(
  initialValue,
  { param, syncStateToQueryParam, syncQueryParamToState },
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamValue = searchParams.get(param);
  const [queryState, setQueryState] = useState(getInitialState());

  const isFirstRender = useRef(true);

  const handleUpdateQueryParams = useCallback(
    (value) => {
      if (value && syncStateToQueryParam) {
        searchParams.set(param, value);
      } else {
        searchParams.delete(param);
      }
      setSearchParams(searchParams, { replace: true });
    },
    [param, searchParams, setSearchParams, syncStateToQueryParam],
  );

  const handleStateChange = useCallback(
    (value) => {
      setQueryState(value);
      handleUpdateQueryParams(value);
    },
    [handleUpdateQueryParams],
  );

  function getInitialState() {
    if (syncQueryParamToState) {
      return searchParamValue || initialValue;
    } else {
      return initialValue;
    }
  }

  useEffect(() => {
    if (isFirstRender.current) return;
    if (!syncQueryParamToState) return;
    if (!searchParamValue) return;
    if (searchParamValue === queryState) return;
    handleStateChange(searchParamValue);
  }, [syncQueryParamToState, searchParamValue, handleStateChange, queryState]);

  useEffect(() => {
    isFirstRender.current = false;
    return () => {
      isFirstRender.current = true;
    };
  }, []);

  return [queryState, handleStateChange];
}

export default useQueryState;
