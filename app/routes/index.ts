import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Config from 'react-native-config';

// Screens
import StorybookUI from '../../storybook';
import FooScreen from '../screens/Foo';

// Stacks
const RootStack =
  Config.STORYBOOK === 'true'
    ? createStackNavigator({
        StorybookUI,
      })
    : createStackNavigator(
        {
          FooScreen,
        },
        {
          defaultNavigationOptions: () => ({
            header: null,
          }),
        },
      );

// Navigator Definition
const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Root: RootStack,
    },
    {
      initialRouteName: 'Root',
    },
  ),
);

export default RootNavigator;
