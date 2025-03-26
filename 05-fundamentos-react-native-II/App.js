import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';
import JavascriptComponente from './componentes/JavascriptComponente.jsx';


export default function App() {
  return (
    <View style={styles.container}>



      <JavascriptComponente />
      <PrimeiroComponente />




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
