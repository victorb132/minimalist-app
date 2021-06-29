import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Home } from '../Screens/Home';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  return(
    <Navigator
      // screenOptions={{ tabBarVisible: false }}
      tabBarOptions={{
        activeTintColor: 'red',
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: getStatusBarHeight() + 10,
          left: 20,
          right: 20,
          borderRadius: 15,
          backgroundColor: '#000',
          height: 70,
          shadowColor: "#555355",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.60,
          shadowRadius: 5,
          elevation: 7,
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg style={Platform.OS === 'ios' ? { top: 12 } : { top: 0 }} width={30} height={30} fill={color} />
          ))
        }}
      />
      <Screen 
        name="Teste"
        component={Home}
        options={{ 
          tabBarIcon: (({ color }) => (
            <CarSvg style={Platform.OS === 'ios' ? { top: 12 } : { top: 0 }} width={30} height={30} fill={color} />
          ))
        }}
      />
    </Navigator>
  )
}