import loadableService from '@utils/loadableService';

const LoadableForgotPassword = loadableService(() => import('./index'));

export default LoadableForgotPassword;
