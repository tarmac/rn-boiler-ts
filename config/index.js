import env from 'react-native-config';

const config = {
  api: {
    host: env.API_HOST,
    timeout: 20000,
  },
  storybook: env.STORYBOOK,
};

const API_URL = config.api.host;
const STORYBOOK = config.storybook;

export { API_URL, STORYBOOK };

export default config;
