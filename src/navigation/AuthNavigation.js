import React from "react";
import { View, Text, StyleSheet } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import ForgotPassword from "../screens/ForgotPassword";
import SignupScreen from "../screens/SignupScreen";
import IntroScreen from "../screens/IntroScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
  <Stack.Navigator initialRouteName="Intro" screenOptions={{headerShown: true}}>
    <Stack.Screen name="Intro" component={IntroScreen}/>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Signup" component={SignupScreen}/>
    <Stack.Screen name="Forgot" component={ForgotPassword}/>
  </Stack.Navigator>
 )
}

export default AuthNavigator;