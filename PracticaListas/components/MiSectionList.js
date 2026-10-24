import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

// Grupos de textos simples
const menu = [
  {
    titulo: 'Comidas',
    data: ['Tacos', 'Torta'],
  },
  {
    titulo: 'Bebidas',
    data: ['Agua', 'Refresco'],
  },
];

export default function MiSectionList() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>2. Ejemplo de SectionList</Text>
      
      <SectionList
        sections={menu}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <Text style={styles.categoria}>{section.titulo}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.elemento}>- {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 20 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  categoria: { fontSize: 16, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 5, marginTop: 10 },
  elemento: { fontSize: 15, paddingLeft: 10, marginVertical: 3 },
});