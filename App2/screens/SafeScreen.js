/*1.ZONA IMPORTACIONES*/
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../screensSafeAreaEjemplo';
import ScrollViewEjemplo from '../screensSafeAreaEjemplo';

/*2.ZONA Main(componentes o screens)*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>
      
    <Text>Aquí va la practica 10</Text>
    <SafeAreaEjemplo>

    </SafeAreaEjemplo>
    <ScrollViewEjemplo>

    </ScrollViewEjemplo>
    </View>
  );
}

/*3.ZONA estilos */
const styles = StyleSheet.create({
  container: {
 flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly', // <--- Espaciado idéntico
  },
  tituloPrincipal:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  }
});
