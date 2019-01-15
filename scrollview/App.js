import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <ScrollView>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Image source={pic} style={styles.img} />
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
        <Text style={styles.largeText}>This is some text</Text>
      </ScrollView>
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
  largeText: {
    fontSize: 80
  },
  img: {
    width: 300,
    height: 150
  }
});
