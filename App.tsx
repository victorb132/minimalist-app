import 'react-native-gesture-handler';
import 'react-native-reanimated'

import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {LogBox} from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Routes } from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
  ])

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color='black'/>
      </View>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}