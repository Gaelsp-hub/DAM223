import { Text, StyleSheet, View } from 'react-native';

export function EncabezadoCafeteria() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encabezado Cafetería</Text>
      <Text style={styles.subtitle}>Bienvenido, Coffee shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});