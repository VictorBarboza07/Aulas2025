import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

  function alerta() {
    alert("Gol do Real Madrid")
  }
  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.textoGrande}>Real Madrid</Text>
        <Text>O Real Madrid Club de Fútbol foi fundado em 1902, em Madri, Espanha, por um grupo de torcedores do futebol. O clube começou como uma entidade exclusivamente futebolística, mas ao longo do século XX foi expandindo para outras modalidades esportivas. </Text>
        <Text style={styles.Titulo}> CONQUISTAS </Text>
        <Text> Maior pontuação no Campeonato Espanhol </Text>
        <Text> Maior sequência de vitórias de um clube espanhol </Text>
        <Text> Maior invencibilidade de um clube espanhol </Text>
        <Text> Maior número de vitórias e gols marcados em um único ano </Text>

        <Button title='Gol' onPress={alerta}> </Button>

        <StatusBar style="auto" />


        <Image
          source={{ uri: "https://i.pinimg.com/736x/e2/97/b1/e297b124c4e1e95aee75c41e72fb3ced.jpg" }}
          style={{
            height: 400,
            width: 400
          }}
        />
        <Image
          source={{ uri: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2024/12/Real_Madrid_campeao-scaled-aspect-ratio-512-320.jpg" }}
          style={{
            height: 400,
            width: 400
          }}
        />
        <Image
          source={{ uri: "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--081447d0-e59a-47d1-a200-2f188d972960/Champions.app.webp?preferwebp=true" }}
          style={{
            height: 400,
            width: 400
          }}
        />
        <Image
          source={{ uri: "https://preview.redd.it/4w9moqoipbxa1.jpg?auto=webp&s=c2caa074cfb57d2a652e69dcc06b946a2cf3a721" }}
          style={{
            height: 400,
            width: 400
          }}
        />
        <Image
          source={{ uri: "https://imgcentauro-a.akamaihd.net/1200x1200/99024201A2.jpg" }}
          style={{
            height: 400,
            width: 400
          }}
        />


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: '',
    paddingTop: '50',
  },
  textoGrande: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  Titulo: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold"
  },
});
