import {View, Button, Text, Image} from 'react-native';

export const Saludo2 = () => {
  return (
    <View>
      <Text>Hola React Native desde componente propio</Text>
      <Image source={require('../assets/wave.png')} style={{ width: 100, height: 100 }} />
      <Button title="Presiona para saludar" />
    </View>
    
  );
}
