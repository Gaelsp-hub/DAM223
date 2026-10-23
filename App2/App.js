/*1.ZONA IMPORTACIONES*/
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*2.ZONA Main(componentes o screens)*/
export default function App() {
  return (
   <MenuScreen/>
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
