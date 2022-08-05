import { useEffect } from 'react';
import { intialiseApp } from '../redux/global/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { selectInitialised } from '../redux/global/selector';
import { useRoutes } from 'react-router-dom';
import APPLICATION_ROUTES from './routes';

import styles from './styles.module.scss';
import Spinner from '../components/Spinner';

function App() {
  const dispatch = useDispatch();

  const initialised = useSelector(selectInitialised);
  const pages = useRoutes(APPLICATION_ROUTES);

  useEffect(() => {
    dispatch(intialiseApp());
  }, [dispatch]);

  if (!initialised) return <Spinner className="margin-top-10" />;

  return (
    <div data-testid="application-container" className={styles.page_content}>
      {pages}
    </div>
  );
}

export default App;
