import { HOME_REDUCER_NAME } from '@redux/Home/constants';
import homeReducer from '@redux/Home/reducer';
import loadableService from '@utils/loadableService';

const LoadableHome = loadableService(
  () => import('./index'),
  [{ key: HOME_REDUCER_NAME, reducer: homeReducer.reducer }],
);

export default LoadableHome;
