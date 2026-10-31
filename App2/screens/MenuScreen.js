/*1.ZONA IMPORTACIONES*/
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';

// Corrección: Agregar './' y respetar mayúsculas/minúsculas
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextinputScreen from './TextinputScreen';

/*2.ZONA Main(componentes o screens)*/
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'Safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'Tarjetas':
            return <TarjetasScreen/>;
        case 'imputscreen':
            return <TextinputScreen/>;
        default:  
            return (
                <View style={styles.container}>
                    <Text>Menú de prácticas</Text>
                    <Button title="Práctica de Tarjetas" onPress={() => setScreen('Tarjetas')} />
                    <Button title="Práctica de SafeAreaView" onPress={() => setScreen('Safe')} />
                    <Button title="Práctica de Pressable" onPress={() => setScreen('press')} />
                    <Button title="Práctica de Textimput" onPress={() => setScreen('imputscreen')} />
                </View>   
            ); 
    }
}

/*3.ZONA estilos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column', // Se recomienda 'column' para apilar los botones verticalmente en el menú
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
});