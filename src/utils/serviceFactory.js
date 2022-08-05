import axios from 'axios';
import { generatePath } from 'react-router-dom';
import StorageService from '@utils/StorageService';
import { USER_TOKEN_STORAGE_KEY } from '@pages/LoginProvider/constants';

export function createService(config) {
  const { baseUrl, url, method, headers: configHeaders } = config;
  const token = StorageService.getValue(USER_TOKEN_STORAGE_KEY);
  return async (pathParams, queryParams, data, headers) => {
    const urlWithParams = generatePath(url, pathParams);
    try {
      return await axios({
        baseURL: baseUrl,
        url: urlWithParams,
        method,
        params: queryParams,
        data,
        headers: {
          ...configHeaders,
          ...headers,
          token,
        },
      });
    } catch (error) {
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    }
  };
}
