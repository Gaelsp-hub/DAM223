import { useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native-safe-area-context';

export default function ScrollViewEjemplo(){
    const [desplazar, setDesplazar] = useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ejemplo de ScrollView</Text>

            <Button
              title={desplazar ? 'desactivar desplazamiento' : 'activar desplazamiento'}
                onPress={() => setDesplazar(!desplazar)}
            />

            <ScrollView>
            style={styles.lista}
            contentContainerStyle={styles.contenido} 
            showsVerticalScrollIndicator={true}
            scrollEnabled={desplazar}

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',

    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    lista: {
        height: 200,
        flexGrow: 0,
        marginTop: 10,
    },
    contenido: {
        paddingBotton: 20,
        tarjeta1:{backgroundColor: '#9517f0', padding: 25, marginBotton: 10, borderRadius: 8},
        tarjeta2:{backgroundColor: '#4148d9', padding: 25, marginBotton: 10, borderRadius: 8},
        tarjeta3:{backgroundColor: '#d21b1b', padding: 25, marginBotton: 10, borderRadius: 8},
        tarjeta4:{backgroundColor: 'rgb(239, 255, 65)', padding: 25, marginBotton: 10, borderRadius: 8},
        tarjeta5:{backgroundColor: 'rgb(27, 244, 20)', padding: 25, marginBotton: 10, borderRadius: 8},
    },
});