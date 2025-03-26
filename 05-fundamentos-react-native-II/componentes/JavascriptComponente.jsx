import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    return (
      <View style={styles.container}>
       

        <Text style={styles.texto}>BORA BORA</Text>
       

      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        padding: 15
    },
    texto: {
        frontSize: 200,
        fontWeight: 600
        }
}) 
