import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../Screens/Home';
import { Habits } from '../Screens/Habits';
import { MiniTask } from '../Screens/MiniTask';

import HomeSvg from '../assets/home.svg';
import RegisterSvg from '../assets/register.svg';
import AppleSvg from '../assets/apple.svg';

import CustomTab from '../components/customTab/bottom.tab';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      tabBar={(props) => (
        <CustomTab color={theme.colors.primary} {...props} />
      )}
      tabBarOptions={{
        activeTintColor: theme.colors.primary
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
        name="Habits"
        component={Habits}
        options={{ 
          tabBarIcon: (({ color }) => (
            <AppleSvg width={30} height={30} fill={"#fff"} />
          ))
        }}
      />
      <Screen 
        name="MiniTask"
        component={MiniTask}
        options={{ 
          tabBarIcon: (({ color }) => (
            <RegisterSvg width={30} height={30} fill={"#fff"} />
          ))
        }}
      />
    </Navigator>
  )
}