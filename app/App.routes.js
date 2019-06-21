import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
  } from "react-navigation";

  // Config
  import { STORYBOOK } from '../config/environment';
  
  // Screens
  import StorybookUI from "../storybook";
  import RootScreen from "./screens/root";
  
  // Stacks
  const RootStack = STORYBOOK
    ? createStackNavigator(
        {
          StorybookUI
        }
      )
    : createStackNavigator(
        {
            RootScreen
        }
      );
  
  // Navigator Definition
  const RootNavigator = createAppContainer(
    createSwitchNavigator(
      {
        Root: RootStack
      },
      {
        initialRouteName: "Root"
      }
    )
  );
  
  export default RootNavigator;
  