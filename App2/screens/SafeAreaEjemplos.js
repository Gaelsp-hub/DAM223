import React, { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaEjemplo() {
  const [mensaje, setMensaje] = useState('Bienvenidos a nuestra practica');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.titulo}>Ejemplo de Safe AreaView</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Button
        title="Cambiar Mensaje"
        onPress={() =>
          setMensaje(
            mensaje === 'Bienvenidos a nuestra practica'
              ? '¡Esta es nuestra practica!'
              : 'Bienvenidos a nuestra practica'
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mensaje: {
    fontSize: 16,
    marginBottom: 10,
  },
});