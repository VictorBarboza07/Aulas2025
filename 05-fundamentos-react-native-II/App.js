import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';

export default function App() {

  const listaAtletas = [
    {
    nome: "Victor",
    idade: "22",
    numero:"7",
    imagem:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0ygyLsWp8qYrv7DCVbkEP7ASQd--F9dPcg&s"
  },
]






  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Atleta
      nome = "Victor"
      idade = "22"
      numero = "7"
      imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFpDKbItyEJNNzsv9hPQdVYAPQDt_rGH69A&s"
      
      />


      {/* <ListaComponente /> */}

      {/* <Perfil
        nome="Gustavo"
        idade={22}
        email="teste@gmail.com"
        telefone="61981111111"
      />

      <Perfil
        nome="João"
        idade={30}
        email="teste1@gmail.com"
        telefone="61981111112"
      />

      <Perfil
        nome="Maria"
        idade={18}
        email="maria@gmail.com"
        telefone="619800000001"
      /> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});