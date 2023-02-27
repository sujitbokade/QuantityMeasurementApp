
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('./assets/unitconverter.png')}
      />
      <Text style={styles.text} >QuantityMeasurementApp</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text1} onPress={() => props.navigation.navigate('LengthConverter')} >Welcome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  image: {
    height: 90,
    width: 90,
    marginTop: 40
  },
  text: {
    fontSize: 25,
    color: '#000',
    marginTop: 20
  },
  text1: {
    fontSize: 30,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#5d57ff',
    top: 300,
    borderRadius: 10,

  }
});

export default Home;