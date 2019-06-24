import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import Config from 'react-native-config';

Config.API_HOST;
Config.STORYBOOK;

AppRegistry.registerComponent(appName, () => App);
