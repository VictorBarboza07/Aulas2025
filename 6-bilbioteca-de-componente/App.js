import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Divider, PaperProvider, Text,} from 'react-native-paper';

export default function App() {

 const listaFrutas = ["Uva", "Maça", "Laranja", "Mamao"] 

  return (
    <PaperProvider>
      
      
            <View style={styles.container}>
          <StatusBar style="auto" />

        {
          listaFrutas.map(
            Item => <Text variant='displaySmall'>{Item}</Text>
          )
        }
        {
          listaFrutas.map(
            Item => (
           <View>
           <Text variant='displaySmarl'>{Item}</Text> 
           <Divider style={{ height : 1}} />
            <View/>
           )
          )
        }

        </View>
    </PaperProvider>
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