import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    message: 'some message'
  };

  changeHandler = text => {
    this.setState({ message: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter some text</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter text here"
          onChangeText={text => {
            this.changeHandler(text);
          }}
        />
        <Text style={styles.text}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textInput: {
    fontSize: 40,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    margin: 50
  },
  text: {
    fontSize: 40,
    margin: 50
  }
});
