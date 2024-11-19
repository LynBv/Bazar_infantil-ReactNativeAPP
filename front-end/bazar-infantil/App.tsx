
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/screens/Login';
import Feed from './src/screens/Feed';

export default function App() {

  return (
    <>
      <StatusBar style="light" backgroundColor='##191414'/>
      <Login /> 
     
    </>
  );
}

