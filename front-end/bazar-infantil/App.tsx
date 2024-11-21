import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routers } from './src/routes';
import { Postagem } from './src/screens/Postagem';

export default function App() {

  return (
    <>
    <StatusBar style="light" backgroundColor='#191414'/>
    <Routers />
  </>
  );
}
