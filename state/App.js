import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    message: 'Welcome to the state',
    message2: 'No message to show',
    showText: true //showText stores true or false
  };
  render() {
    //! means NOT -(+1)
    if (!this.state.showText) {
      return (
        <View style={styles.container}>
          <Text>{this.state.message2}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.bigRed}>{this.state.message}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigRed: {
    color: 'red',
    fontSize: 36
  }
});
