import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../Screens/Home';

import HomeSvg from '../assets/home.svg';
import MenuSvg from '../assets/menu.svg';
import PeopleSvg from '../assets/people.svg';

import CustomTab from '../components/customTab/bottom.tab';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  return(
    <Navigator
      tabBar={(props) => (
        <CustomTab color="#000" {...props} />
      )}
      tabBarOptions={{
        activeTintColor: '#000'
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={30} height={30} fill={"#fff"} />
          ))
        }}
      />
      <Screen 
        name="Teste"
        component={Home}
        options={{ 
          tabBarIcon: (({ color }) => (
            <MenuSvg width={30} height={30} fill={"#fff"} />
          ))
        }}
      />
      {/* <Screen 
        name="e"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={30} height={30} fill={"#fff"} />
          ))
        }}
      /> */}
      <Screen 
        name="t"
        component={Home}
        options={{ 
          tabBarIcon: (({ color }) => (
            <PeopleSvg width={35} height={35} fill={"#fff"} />
          ))
        }}
      />
    </Navigator>
  )
}