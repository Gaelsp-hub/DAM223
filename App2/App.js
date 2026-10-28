/*1.ZONA IMPORTACIONES*/
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


/*2.ZONA Main(componentes o screens)*/
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen/>
      </View>
    </SafeAreaProvider>
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
