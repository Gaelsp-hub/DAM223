/*1.ZONA IMPORTACIONES*/
import { StyleSheet, View, Text } from 'react-native';


/*2.ZONA Main(componentes o screens)*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>
      
    <Text>Aquí va la practica 10</Text>

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
});
