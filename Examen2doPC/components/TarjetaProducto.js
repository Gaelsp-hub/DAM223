import { Text, StyleSheet, View, Pressable, Alert } from 'react-native';

export function TarjetaProducto({ nombre, descripcion, precio }) {
  const mostrarDetalle = () => {
    Alert.alert(nombre, `Precio: $${precio}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Text style={styles.precio}>Precio: ${precio}</Text>
      
      <Pressable style={styles.boton} onPress={mostrarDetalle}>
        <Text style={styles.textoBoton}>Ver producto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  precio: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});