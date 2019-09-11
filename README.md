# React Native Boilerplate by Tarmac

## Tech stack

- [react 16.9.0](https://facebook.github.io/react-native/)
- [react-native 0.60.5](https://facebook.github.io/react-native/)
- [typeScript 3.6.3](https://www.typescriptlang.org/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [redux-ducks-ts](https://github.com/atasanchez/redux-ducks-ts/)
- [jest](https://jestjs.io/)
- [enzyme](https://airbnb.io/enzyme/)
- [eslint](https://eslint.org/)
- [storybook](https://storybook.js.org/docs/guides/guide-react-native/)
- [react-navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [styled-components](https://www.styled-components.com/)

## Requirements

_NOTE_: The environment for this was done with macOS 10.14.X

- Node >= 10 (LTS)
- NPM or Yarn (Optional)
- Watchman
- XCode
- Android Studio

## Project Architecture

### Dir Structure

All code of the app exist into the `app` directory, all files or folders outside of this directory are configuration files except the android and ios directories.

```
- android/
- ios/
- app/
    - assets/
    - components/
    - routes/
    - screens/
    - state/
    - App.tsx
- common/
    - http/
    - utils/
- config/
- declarations/
- environments/
- storybook/
```

The Redux Store it's contained under the `state` directory, into of this must exist a directory for each module in the store with some minimal files and others optional.

### Redux Architecture

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

### Environments

You should create minimal two `.env.*` files in the `environments` directory.

- `.env.dev`
- `.env.storybook`

In these you should replicate the vars in the file `.env.template` with the correct values.

## How to start the boilerplate

- Clone this repository:

```bash
$> git clone https://github.com/tarmac/rn-boiler-ts
```

- Inside the project run:

```bash
$> rm -rf .git/
$> git init
$> yarn
$> yarn renameApp <NewNameOfTheApp> -b "[domain].[company].[project]"
```

### Android & iOS

#### Development

The platform in the command bellow must be one of `android` or `ios`

```bash
$> yarn run:[platform]
```

#### Storybook

```bash
$> yarn run:[platform]-storybook
```

_NOTE_: It's automatically start the metro server.

## Contribute

Please contribute with ideas on GH issues or create PR to improve this repository.

Thanks.
