import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//navigator
import HomeStackNavigator from './homeStackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
