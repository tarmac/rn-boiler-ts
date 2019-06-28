import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
]);

AppRegistry.registerComponent(appName, () => App);
