/*1.ZONA IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/saludo'; 
import { Saludo2 } from './components/saludo2';
import { Perfil } from './components/Perfil';

/*2.ZONA Main(componentes o screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hola Mundo React Native </Text>
      <Image source={require('./assets/wave.png')} />
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Perfil
      nombre="gael"
      carrera="TIID"
      materia="Movil"
      cuatri="4"
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
