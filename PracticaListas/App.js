import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Importo mis dos componentes pequeños desde la carpeta components
import MiFlatList from './components/MiFlatList';
import MiSectionList from './components/MiSectionList';

export default function App() {
  // Un solo State: guarda 'flat' o 'secciones' para saber qué mostrar
  const [pantalla, setPantalla] = useState('flat');

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Práctica Guiada de Listas</Text>

      {/* Botones para cambiar la pantalla */}
      <View style={styles.contenedorBotones}>
        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('flat')}>
          <Text style={styles.textoBoton}>Ver FlatList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('secciones')}>
          <Text style={styles.textoBoton}>Ver SectionList</Text>
        </TouchableOpacity>
      </View>

      {/* Si pantalla es 'flat' muestra MiFlatList, de lo contrario muestra MiSectionList */}
      {pantalla === 'flat' ? <MiFlatList /> : <MiSectionList />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, paddingTop: 40, backgroundColor: '#ffffff' },
  tituloPrincipal: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  contenedorBotones: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  boton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  textoBoton: { color: 'white', fontWeight: 'bold' },
});