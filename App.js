import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, Button, Alert, Image, TouchableWithoutFeedback, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {AppRegistry} from 'react-native'
import app from './ServerExample'
import {name as appName} from './app.json';


const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => app);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bookContainer: {
    width: '100%',
    height: '100%',


  },
  titles: {
    marginTop: '40%',
    width: '100%',
    alignItems: 'center',


  },
  title: {
    fontSize: 40,
    fontWeight: '500',

  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',

  }

});
