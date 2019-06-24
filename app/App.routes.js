import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Config from 'react-native-config';

// Screens
import StorybookUI from '../storybook';
import RootScreen from './screens/root';

// Stacks
const RootStack =
  Config.STORYBOOK === 'true'
    ? createStackNavigator({
        StorybookUI,
      })
    : createStackNavigator({
        RootScreen,
      });

// Navigator Definition
const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Root: RootStack,
    },
    {
      initialRouteName: 'Root',
    }
  )
);

export default RootNavigator;
