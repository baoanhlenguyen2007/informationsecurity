import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from "react";

import PreLoad from "./screens/PreLoad";
import Home from "./screens/Home";
import Tab from "./assets/BottomTab";
import WifiManager from "./screens/WifiManager";
import SystemClean from './screens/SystemClean';
import NotiCenter from './screens/NotiCenter';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreLoad" component={PreLoad} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WifiManager" component={WifiManager} />
        <Stack.Screen name="SystemClean" component={SystemClean} />
        <Stack.Screen name="NotiCenter" component={NotiCenter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}