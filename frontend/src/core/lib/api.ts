import axios, { AxiosInstance } from 'axios';

/**
 * @configuration apiConfig
 * @summary Central API configuration with environment-based URL management
 * @type api-configuration
 * @category core-library
 */
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  version: import.meta.env.VITE_API_VERSION || 'v1',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),

  get internalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/internal`;
  },
};

/**
 * @client apiClient
 * @summary Axios client for API endpoints
 * @type http-client
 * @category core-library
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: apiConfig.internalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
