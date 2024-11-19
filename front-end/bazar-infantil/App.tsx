
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CriarPostagem from './src/screens/CriarPostagem';
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

