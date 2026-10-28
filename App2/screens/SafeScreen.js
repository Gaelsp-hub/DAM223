import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Asegúrate de incluir la 's' al final
import SafeAreaEjemplo from './SafeAreaEjemplos';
import ScrollViewEjemplo from './ScrollViewEjemplo';

export default function SafeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Aquí va la práctica 10</Text>
      <SafeAreaEjemplo />
      <ScrollViewEjemplo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});