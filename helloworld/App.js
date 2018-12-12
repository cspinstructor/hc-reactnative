import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textbigred}>HELLO WORLD</Text>
        <Text style={styles.textsmallblue}>Welcome to Hanchiang</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textbigred: {
    fontSize: 40,
    color: 'red'
  },
  textsmallblue: {
    fontSize: 30,
    color: 'blue'
  }
});
