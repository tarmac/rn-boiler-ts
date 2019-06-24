import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

// Config
import { STORYBOOK } from '../config';

// Screens
import StorybookUI from '../storybook';
import RootScreen from './screens/root';

console.log(STORYBOOK);

// Stacks
const RootStack =
  STORYBOOK === true
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
