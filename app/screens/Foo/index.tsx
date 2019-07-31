import React, { ReactElement } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RootScreen = (): ReactElement => (
  <View style={styles.container}>
    <Text style={styles.welcome}>React Native Template by Tarmac!</Text>
    <Text style={styles.instructions}>To get started, edit App.tsx</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Text style={styles.welcome}>Environment vars test:</Text>
    <Text style={styles.instructions}>API_HOST: {Config.API_HOST}</Text>
    <Text style={styles.instructions}>STORYBOOK: {Config.STORYBOOK}</Text>
  </View>
);

export default RootScreen;
