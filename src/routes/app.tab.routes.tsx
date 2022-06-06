import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Habits } from '../Screens/Habits';
import { MiniTask } from '../Screens/MiniTask';

import HomeSvg from '../assets/home.svg';
import RegisterSvg from '../assets/register.svg';
import AppleSvg from '../assets/apple.svg';

import CustomTab from '../components/customTab/bottom.tab';
import { useTheme } from 'styled-components';
import { Home } from '../Screens/Home';

export type RootTabParamList = {
  StackRoutes: undefined;
  Habits: undefined;
  MiniTask: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      tabBar={(props: any) => (
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
            <HomeSvg width={30} height={30} fill={color} />
          ))
        }}
      />
      <Screen
        name="Habits"
        component={Habits}
        options={{
          tabBarIcon: (({ color }) => (
            <AppleSvg width={30} height={30} fill={color} />
          ))
        }}
      />
      <Screen
        name="MiniTask"
        component={MiniTask}
        options={{
          tabBarIcon: (({ color }) => (
            <RegisterSvg width={30} height={30} fill={color} />
          ))
        }}
      />
    </Navigator>
  )
}