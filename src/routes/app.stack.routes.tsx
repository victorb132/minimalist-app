import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Timer } from '../Screens/Timer';
import { AppTabRoutes } from './app.tab.routes';

export type RootStackParamList = {
  Home: undefined;
  Timer: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator initialRouteName="Home" screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name="AppTab"
        component={AppTabRoutes}
      />
      <Screen 
        name="Timer"
        component={Timer}
      />
    </Navigator>
  )
}