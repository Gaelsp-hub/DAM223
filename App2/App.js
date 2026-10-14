/*1.ZONA IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/saludo'; 
import { Saludo2 } from './components/saludo2';

/*2.ZONA Main(componentes o screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/wave.png')}
        style={{ width: 100, height: 100 }}
      />
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Text> Hola Mundo React Native </Text>
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
