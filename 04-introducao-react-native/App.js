//Imports
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

//Componente Principal
//Ele deve retorna o que será renderizado na tela (Template feito com JSX)
export default function App() {
 //Lógica do meu componente
const nome = "Victor"

function alerta() {
  alert("Você é Besta")
}
 



//Retorno com JSX 
  return (
    <View style={styles.container}>
      {/*Comentario dentro do Template JSX */}
      {/* Codigo javascript */}
      <StatusBar style="auto" />
      <Text>{2 + 2}</Text>
      <Text>{nome}</Text>
      <Text>App do Victor!</Text>
      <Button title='alerta' onPress={alerta}> </Button>

      <Image
        source={{ uri: "https://media1.tenor.com/m/o8EC-5TTaogAAAAd/macaco-olhando.gif"}} 
        style={{
          height: 300,
          width: 300
        }}
        />

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
