
import{Text, StyleSheet, View} from 'react-native';



export default function EncabezadoCafeteria() {
    
         <View>
            <View style={styles.container}>
                <Text style={styles.title}>Encabezado Cafeteria</Text>
                <Text style={styles.subtitle}>Bienvenido, Coffe shop</Text>
            
            </View>

        </View>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
});
