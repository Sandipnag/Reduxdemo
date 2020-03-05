/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Product from './screens/Products';
import Cart from './screens/Cart';

import { Provider } from 'react-redux';
import store from './redux/store';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        
        <Stack.Screen 
          name="Product" 
          component={Product} 
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
