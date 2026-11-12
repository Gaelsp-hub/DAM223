
import { StyleSheet, Text, View } from 'react-native';

import { EncabezadoCafeteria } from './components/EncabezadoCafeteria';
import { TarjetaProducto } from './components/TarjetaProducto';

export default function App() {
  return (
    
    <View style={styles.container}>
      <EncabezadoCafeteria />
      <Text>Antojo Express</Text>
      <View>
      

      </View>
      <View>
        <TarjetaProducto nombre="Café" precio={45} descripcion="café hecho de grano seleccionado" />
        <TarjetaProducto nombre="Hamburguesa" precio={100} descripcion="con queso, lechuga y tomate" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
