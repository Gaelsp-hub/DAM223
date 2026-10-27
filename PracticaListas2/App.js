import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MiFlatList from './components/MiFlatList';
import MiSectionList from './components/MiSectionList';

export default function App() {

  const [pantalla, setPantalla] = useState('flat');

  return (
    <SafeAreaView style={styles.contenedor}>
      <text style={styles.titulo}>Practica Listas 2</text>

      <View style={styles.contenedorBotones}>
        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('flat')}>
          <Text style={styles.textoBoton}>FlatList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('section')}>
          <Text style={styles.textoBoton}>SectionList</Text>
        </TouchableOpacity>
      </View>
      
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

