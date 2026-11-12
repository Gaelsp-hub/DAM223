import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { EncabezadoCafeteria } from './components/EncabezadoCafeteria';
import { TarjetaProducto } from './components/TarjetaProducto';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Antojo Express</Text>

      <EncabezadoCafeteria />

      <TarjetaProducto 
        nombre="Café" 
        descripcion="Café hecho de grano seleccionado" 
        precio={45} 
      />
      <TarjetaProducto 
        nombre="Hamburguesa" 
        descripcion="Con queso, lechuga y tomate" 
        precio={100} 
      />
      <TarjetaProducto 
        nombre="Sándwich" 
        descripcion="Con jamón, queso y lechuga" 
        precio={80} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});