# React Native Boilerplate by Tarmac

## Tech stack

- [react-native >= 0.59](https://facebook.github.io/react-native/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [jest](https://jestjs.io/)
- [enzyme](https://airbnb.io/enzyme/)
- [eslint](https://eslint.org/)
- [storybook](https://storybook.js.org/docs/guides/guide-react-native/)
- [react-navitagion](https://reactnavigation.org/docs/en/getting-started.html)

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
- NPM or Yarn (Optional)
- Watchman
- Xcode
- Android Studio

## How to start the boilerplate

- Clone this repo:

```
$> git clone https://github.com/tarmac/RN-Boiler-TS
```

- Inside the project run:

```
$> rm -rf .git/
$> git init
$> yarn
$> yarn renameApp <newNameOfTheApp> -b "[domain].[company].[project]"
```

- open `.circleci/config.yml` and replace on `line 156`
  `<PLACE_APP_NAME>` to the projectName you use.

## dev

#### android

##### Development

```
$> yarn android-dev
```

##### Storybook

```
$> yarn android-storybook
```

_NOTE_: It's automatically start the metro server.

#### iOS

You must open up the project in Xcode (CocoaPods version `*.xcworkspace`), select the correct scheme (95% of the time it’s Dev), press play.

### Contribute

Please contribute with ideas on GH issues or create PR to improve this repo.

Thanks.
