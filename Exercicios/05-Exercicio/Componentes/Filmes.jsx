import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Filme({ nome, ano, diretor, tipo, capa }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Gênero: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
