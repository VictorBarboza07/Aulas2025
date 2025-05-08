import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

const jogadores = [/* seus dados aqui */];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.nome} subtitle={`${item.posicao} - Nº ${item.numero}`} />
          <Card.Content>
            <Text>Idade: {item.idade}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem }} />
        </Card>
      )}
    />
  );
}
