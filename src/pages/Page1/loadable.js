import loadableService from '@utils/loadableService';

const LoadablePage1 = loadableService(() => import('./index'));

export default LoadablePage1;
