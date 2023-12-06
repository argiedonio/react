// RootStack.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';

import Homepage from './../screens/homepage';
import Login from './../screens/login';
import Register from './../screens/register';
import Dashboard from './../screens/dashboard';
import ForgotPassword from './../screens/forgotpassword';
import ConfirmPassword from './../screens/confirmpassword';
import ChangeYourPassword from './../screens/changeyourpassword';


const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen name="Homepage" component={Homepage} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Register" component={Register} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{headerTitleAlign : 'center'}}/>
      <Stack.Screen name="ChangeYourPassword" component={ChangeYourPassword} options={{headerTitleAlign : 'center'}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
