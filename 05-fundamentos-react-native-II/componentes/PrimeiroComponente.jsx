import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
    return (
      <View style={styles.container}>
        <Text style={styles.textextogrande}> EAEEE </Text>
        <Text style={styles.Textextogrande}> EAEEE </Text>
        <Text style={styles.Textextogrande}> EAEEE </Text>
        <Text style={styles.textextogrande}> EAEEE </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    textogrande: {
    frontSize: 150,
    fontWeight: 300
    }
})
