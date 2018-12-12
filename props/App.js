import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        'https://nerdist.com/wp-content/uploads/2017/12/bulbasaur-charmander-squirtle-pokemon.jpg'
    };

    let pic2 = {
      uri:
        'https://cdn.pixabay.com/photo/2016/11/29/19/26/roses-1870947_960_720.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.bigred}>Pokemon</Text>
        <Image source={pic} style={styles.imgsize} />

        <Text style={styles.bigred}>Rose</Text>
        <Image source={pic2} style={styles.imgsize} />
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
  bigred: {
    fontSize: 30,
    color: 'red'
  },
  imgsize: {
    width: 350,
    height: 250
  }
});
