# React Native Boilerplate by Tarmac

## Tech stack

- [react-native >= 0.59](https://facebook.github.io/react-native/)
- [styled-components](https://www.styled-components.com/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [jest](https://jestjs.io/)
- [enzyme](https://airbnb.io/enzyme/)
- [eslint](https://eslint.org/)
- [storybook](https://storybook.js.org/docs/guides/guide-react-native/)

## Project Architecture.

#### Dir Structure:

All code of the app exist into the `app` directory, all files or folders outside of this directory are configuration files except the android and ios directories.

```
- android/
- ios/
- app/
    - assets/
    - common/
        - http/
        - utils/
    - components/
        - component1/
            - index.ts
        - component2/
    - views/
        view1/
          - index.ts
          - _screen.ts
    - state/
        - module1/
        - module2/
- config/
```

The Redux Store it's contained under the `state` directory, into of this must exist a directory for each module in the store with some minimal files and others optional.

#### Redux Architecture:

In a module of the state, must exist some minimal files and others optionals:

```
_ _duck.ts (Required)
- actions.ts (Required)
- index.ts (Required)
- reducer.ts (Required)
- sagas.ts (Optional)
- selectors.ts (Optional)
- services.ts (Optional)
- types.ts (Required)
```

- **\_duck**: Module definition.
- **actions**: Definitions of bindings with actions creators of the state.
- **index**: Initial point of the module and export.
- **reducer**: Definitions of mutations in the state using the actions creators defined in the types.
- **types**: Definitions of types of actions possibles in the state.

## Requirements.

_NOTE_: The environment for this was done with macOS 10.14.X

- Node >= 10 (LTS)
- yarn _THE WHOLE ENVIRONMENT RUN THANKS TO YARN, USE IT!!!!_
- watchman
- xcode
- android studio

## How to start the boilerplate

- Clone this repo:

```
$> git clone https://github.com/tarmac/RN-Boilerplate
```

- Inside the project run:

```
$> rm -rf .git/
$> git init
$> yarn
$> yarn renameApp <newNameOfTheApp> -b "com.[company].[project]"
```

- open `.circleci/config.yml` and replace on `line 156`
  `<PLACE_APP_NAME>` to the projectName you use.

## dev

#### android

```
$> yarn android
```

#### iOS

```
$> yarn ios
```

_NOTE_: It's automatically start the metro server.

### Contribute

This is an initial step into structure a solid Boilerplate for react-native,it's important to consider
that the _only_ opiniated part of this project is the directory structure, that means if you want to change
[react-navigation](https://reactnavigation.org/) for [react-native-navigation](https://wix.github.io/react-native-navigation/#/)
or [redux-persist](https://github.com/rt2zz/redux-persist) for [realm](https://realm.io/) you should be able to
do it without too much struggle.

Please contribute with ideas on GH issues or create PR to improve this repo.

Thanks
