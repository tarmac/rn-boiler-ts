import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

import config from './config';

console.log(config);

AppRegistry.registerComponent(appName, () => App);
