import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavascriptComponente from './componentes/JavaScriptComponente';

export default function App() {
  return (
    <View style={styles.container}>
    
    <PrimeiroComponente></PrimeiroComponente>
    <SegundoComponente></SegundoComponente>
    <JavascriptComponente></JavascriptComponente>


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
