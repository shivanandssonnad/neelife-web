import loadableService from '@utils/loadableService';

const LoadableResetPassword = loadableService(() => import('./index'));

export default LoadableResetPassword;
