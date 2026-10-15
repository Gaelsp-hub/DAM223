/* 1. ZONA DE IMPORTACIONES */
import { Text, View } from 'react-native';

/* 2. ZONA MAIN */
export const Perfil = () => {
  return (
    <View>
      <Text>Nombre: Gael Sanchez Peralta</Text>
      <Text>Carrera: TIID</Text>
      <Text>Materia: Desarrollo de Aplicaciones Móviles</Text>
      <Text>Cuatrimestre: 4to</Text>
    </View>
  );
};

/* 1. ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/saludo'; 
import { Saludo2 } from './components/saludo2';
import { Perfil } from './components/Perfil';

/* 2. ZONA MAIN */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')} style={{ width: 100, height: 100 }} />
      <Saludo />
      <Saludo2 />
      <Perfil />
      <StatusBar style="auto" />
    </View>
  );
}

/* 3. ZONA ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
