import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { TabRouters } from './BottonTabs';
import Feed from '../screens/Feed';
import React from 'react';
import {Postagem} from '../screens/Postagem';
import CadastroUsuario from '../screens/CadastroUsuario';
import Carrinho from '../screens/Carrinho/CarrinhoScreen';


const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator initialRouteName="StackLogin" >
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackPostagem" component={Postagem} options={{ headerShown: false }} />
      <Stack.Screen name="StackCarrinho" component={Carrinho} options={{ headerShown: false }} />
      <Stack.Screen name="StackCadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }} />
      <Stack.Screen name="StackFeed" component={TabRouters} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}