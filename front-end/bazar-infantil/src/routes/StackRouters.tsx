import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { TabRouters } from './BottonTabs';
import Feed from '../screens/Feed';
import React from 'react';
import {Postagem} from '../screens/Postagem';

const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator initialRouteName="StackFeed" >
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackPostagem" component={Postagem} options={{ headerShown: false }} />
      <Stack.Screen name="StackFeed" component={TabRouters} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}