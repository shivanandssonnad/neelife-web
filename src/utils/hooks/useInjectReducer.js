import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

const useInjectReducer = (asyncReducers) => {
  // get the react redux context to access store.injectReducer
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    if (Array.isArray(asyncReducers) && asyncReducers.length) {
      asyncReducers.forEach((each) => {
        if (each.key) {
          context.store.injectReducer(each.key, each.reducer);
        }
      });
    }
  }, []);
};

export default useInjectReducer;
