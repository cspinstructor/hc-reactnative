import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  buttonHandler = () => {
    alert('You pressed the button');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={() => {
            alert('You tapped the button');
          }}
          title="Press Me"
          color="red"
        />
        <Button onPress={this.buttonHandler} title="Press Me" color="blue" />
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
  }
});
