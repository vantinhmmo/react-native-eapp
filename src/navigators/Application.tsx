import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '../hooks';
import BottomTab from './BottomTab';

import { useFlipper } from '@react-navigation/devtools';
import { Comic } from '../screens';



const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Colors } = useTheme();
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef} >
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={Colors.statusBar} />
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen name="Comic" component={Comic} options={{ headerShown: false }} />
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
