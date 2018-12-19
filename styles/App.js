import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Just red</Text>
        <Text style={styles.bigblue}>Just bigblue</Text>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
