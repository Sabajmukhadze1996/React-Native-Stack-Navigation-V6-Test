import React, { useState, useEffect } from 'react';
import axios from "axios";
import { StatusBar } from 'expo-status-bar';

import { 
StyleSheet, 
Text, 
View, 
Button, 
TextInput,
ScrollView,
FlatList,
TouchableOpacity,
keyboardAvoidingView,
Platform,
Linking,
Alert,
Image,
Modal,
Switch,
TouchableWithoutFeedback,
useColorScheme,
SafeAreaView
} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/AuthNavigation';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
<NavigationContainer>
  <AuthNavigator />
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: 50,
  paddingHorizontal: 20,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "seashell"
  },
  
})

