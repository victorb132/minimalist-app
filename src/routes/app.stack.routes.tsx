import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { Timer } from '../Screens/Timer';

export type RootStackParamList = {
  Home: undefined;
  Timer: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AppStackRoutes(){
  return(
    <Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Timer"
        component={Timer}
      />
    </Navigator>
  )
}