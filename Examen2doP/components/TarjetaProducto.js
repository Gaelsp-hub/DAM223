import { Text, StyleSheet, Pressable, Alert, Button, View } from 'react-native';

export const TarjetaProducto = ({ nombre, precio, descripcion }) => {
  const mostrarDetalle = () => {
    Alert.alert('Detalle del producto', `Nombre: ${nombre} + Descripción: ${descripcion} + Precio: ${precio}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre}</Text>
      <Text>{descripcion}</Text>
      <Text>Precio: ${precio}</Text>
      <Pressable>
        <Button title="Ver Producto" onPress={mostrarDetalle} />
      </Pressable>
    </View>
  );
};