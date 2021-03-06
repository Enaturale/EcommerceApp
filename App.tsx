/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,  
  StatusBar,  
  useColorScheme,
 
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/Homescreen';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import ShoppingCart from './src/screens/ShoppingCart/ShoppingCart';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* <HomeScreen />      */}
      {/* <ProductScreen /> */}
      <ShoppingCart />
    </SafeAreaView>
  );
};



export default App;
