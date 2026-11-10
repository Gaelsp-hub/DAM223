import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const TarjetaPerfil = ({ nombre, carrera, materia, cuatri, color = '#e0e0e0' }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[styles.tarjeta, { backgroundColor: color }]}>
      <Text style={styles.nombreTarjeta}>{nombre}</Text>

      {mostrar && (
        <View style={styles.infoContenido}>
          <Text style={styles.textoInfo}>Carrera: {carrera}</Text>
          <Text style={styles.textoInfo}>Materia: {materia}</Text>
          <Text style={styles.textoInfo}>Cuatrimestre: {cuatri}</Text>
        </View>
      )}

      <Button
        title={mostrar ? "Ocultar" : "Ver perfil"}
        onPress={() => setMostrar(!mostrar)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    flex: 1,
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  nombreTarjeta: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  infoContenido: {
    marginVertical: 6,
    alignItems: 'center',
  },
  textoInfo: {
    fontSize: 11,
  },
});