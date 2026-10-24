import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Solo un arreglo con textos simples
const comidas = ['Tacos al Pastor', 'Torta de Jamón', 'Quesadilla'];

export default function MiFlatList() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>1. Ejemplo de FlatList</Text>
      
      <FlatList
        data={comidas}
        keyExtractor={(item, index) => index.toString()} // Usa la posición (0, 1, 2...) automáticamente
        renderItem={({ item }) => (
          <Text style={styles.elemento}>• {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 20 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  elemento: { fontSize: 16, marginVertical: 5 },
});