import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { TabRouters } from './BottonTabs';
import Feed from '../screens/Feed';
import CadastroUsuario from '../screens/CadastroUsuario';
import React from 'react';


const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator initialRouteName="StackLogin" >
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackCadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }} />
      <Stack.Screen name="StackFeed" component={TabRouters} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}