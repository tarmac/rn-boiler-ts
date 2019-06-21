/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

console.log(process.env['STORYBOOK']);

AppRegistry.registerComponent(appName, () => App);
