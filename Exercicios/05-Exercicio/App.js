// App.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Filme from './Componentes/Filmes';
import Serie from './Componentes/Serie';

const listaFilmes = [
  {
    nome: 'A Doce Vida',
    ano: 1960,
    diretor: 'Federico Fellini',
    tipo: 'Drama',
    capa: 'https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg',
  },
  {
    nome: 'Psicose',
    ano: 1960,
    diretor: 'Alfred Hitchcock',
    tipo: 'Terror',
    capa: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg',
  },
];

const listaSeries = [
  {
    "nome": "Buffy, a Caça-Vampiros",
    "ano": 1997,
    "diretor": "Joss Whedon",
    "temporadas": 7,
    "capa": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Buffy_the_vampire_slayer.svg"
  },
  {
    "nome": "Desperate Housewives",
    "ano": 2004,
    "diretor": "Marc Cherry",
    "temporadas": 8,
    "capa": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Desperate_Housewives_Logo.svg"
  },
  {
    "nome": "Sons of Anarchy",
    "ano": 2008,
    "diretor": "Kurt Sutter",
    "temporadas": 7,
    "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
  }
];


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}
      
      <Text style={styles.header}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
