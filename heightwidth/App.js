import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.powderblue} />
        <View style={styles.skyblue} />
        <View style={styles.steelblue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  powderblue: {
    height: 100,
    backgroundColor: 'powderblue',
    margin: 50
  },
  skyblue: {
    height: 100,
    backgroundColor: 'skyblue',
    margin: 50
  },
  steelblue: {
    height: 100,
    backgroundColor: 'steelblue',
    margin: 50
  }
});
