/*1.ZONA IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../components/Perfil';

/*2.ZONA Main(componentes o screens)*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
       <Perfil
      nombre="gael"
      carrera="TIID"
      materia="Movil"
      cuatri="4"
      color="green"
      />

      <Perfil
      nombre="Alfredo"
      carrera="TIID"
      materia="Movil"
      cuatri="4"
      color="blue"
      />

      <Perfil
      nombre="Paul"
      carrera="TIID"
      materia="Movil"
      cuatri="4"
      color="orange"
      />
      <StatusBar style="auto" />
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
