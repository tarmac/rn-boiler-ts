import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
} from 'react-navigation';

let _navigator: NavigationContainerComponent;

const setTopLevelNavigator = (navigatorRef: NavigationContainerComponent) =>
  (_navigator = navigatorRef);

const navigate = (routeName: string, params?: NavigationParams) =>
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );

export default {
  navigate,
  setTopLevelNavigator,
};
