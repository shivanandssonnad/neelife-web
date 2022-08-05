import getDevEnvronmentConfig from './devConfig';
import getStagingEnvronmentConfig from './stagingConfig';
import getQaEnvronmentConfig from './qaConfig';
import getProdEnvronmentConfig from './prodConfig';

import {
  PRODUCTION_ENVIRONMENT,
  QA_ENVIRONMENT,
  STAGING_ENVIRONMENT,
} from './constants';

export default function getEnvironmentConfig() {
  const env = process.env.NODE_ENV;
  switch (env) {
    case PRODUCTION_ENVIRONMENT:
      return getProdEnvronmentConfig();
    case STAGING_ENVIRONMENT:
      return getStagingEnvronmentConfig();
    case QA_ENVIRONMENT:
      return getQaEnvronmentConfig();
    default:
      return getDevEnvronmentConfig();
  }
}
