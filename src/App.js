/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainScreen from './screens/Main';
import store from './store/index';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ViewPhotoScreen from './screens/ViewPhoto';

const MainNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    ViewPhotoScreen: ViewPhotoScreen,
  },
  {
    initialRouteName: 'MainScreen',
  },
);

const AppNavigator = createAppContainer(MainNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
