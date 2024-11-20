import { NavigationContainer } from '@react-navigation/native';
import { StackRouters } from './StackRouters';
import React from 'react';

export const Routers = () => {

  return (
    <NavigationContainer>
        <StackRouters />
    </NavigationContainer>
  )
}