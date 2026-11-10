import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Encabezado({ titulo, subtitulo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.mainTitle}>{titulo}</Text>
      <Text style={styles.subtitle}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#93c5fd',
    marginTop: 4,
  },
});