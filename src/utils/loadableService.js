import React, { lazy, Suspense } from 'react';
import Spinner from '@components/Spinner';
import useInjectReducer from './hooks/useInjectReducer';

const loadableService = (
  importFunc,
  asyncReducers = [],
  { fallback = <Spinner /> } = { fallback: <Spinner /> },
) => {
  const LazyComponent = lazy(importFunc);

  return (props) => {
    useInjectReducer(asyncReducers);
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default loadableService;
