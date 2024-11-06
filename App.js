import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './src/components/login/login';
import SignUp from './src/components/sign-up/sign-up';
import Home from './src/components/home/home';
import ForgotPassword from './src/components/forgot-password/forgot-password';
import CreateCapsule from './src/components/create/create'; // Import your component

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Sign Up" 
            component={SignUp} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Forgot Password" 
            component={ForgotPassword} 
            options={{ headerShown: true }} 
          />
          <Stack.Screen 
            name="Create Capsule" 
            component={CreateCapsule} 
            options={{ title: 'Create Memory Capsule' }} // Optional title
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
