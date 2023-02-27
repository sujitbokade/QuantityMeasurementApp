/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LengthConverter from './src/LengthConverter';
import Home from './src/Home';
import TempConverter from './src/TempConverter';
import WeightConverter from './src/WeightConverter';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='LengthConverter' component={LengthConverter} />
        <Stack.Screen name='TempConverter' component={TempConverter} />
        <Stack.Screen name='WeightConverter' component={WeightConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
