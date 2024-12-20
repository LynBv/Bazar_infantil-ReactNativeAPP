import { NavigationContainer } from '@react-navigation/native';
import { StackRouters } from './StackRouters';
import React from 'react';
import { AuthProvider } from '../hooks/useAuth';

export const Routers = () => {

  return (
    <NavigationContainer>
      <AuthProvider>
          <StackRouters />
      </AuthProvider>
    </NavigationContainer>
  )
}