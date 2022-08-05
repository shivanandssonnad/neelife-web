import loadableService from '@utils/loadableService';

const LoadableLoginPage = loadableService(() => import('./index'));

export default LoadableLoginPage;
