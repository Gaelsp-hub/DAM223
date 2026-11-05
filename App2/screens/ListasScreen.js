import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SectionList, StyleSheet } from 'react-native';

// --- DATOS ---
const comidas = ['Tacos al Pastor', 'Torta de Jamón', 'Quesadilla'];

const menu = [
  {
    titulo: 'Comidas',
    data: ['Tacos', 'Torta'],
  },
  {
    titulo: 'Bebidas',
    data: ['Agua', 'Refresco'],
  },
];

// --- COMPONENTES INTERNOS ---
function MiFlatList() {
  return (
    <View style={styles.contenedorLista}>
      <Text style={styles.subtitulo}>1. Ejemplo de FlatList</Text>
      <FlatList
        data={comidas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.elemento}>{item}</Text>}
      />
    </View>
  );
}

function MiSectionList() {
  return (
    <View style={styles.contenedorLista}>
      <Text style={styles.subtitulo}>2. Ejemplo de SectionList</Text>
      <SectionList
        sections={menu}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <Text style={styles.categoria}>{section.titulo}</Text>
        )}
        renderItem={({ item }) => <Text style={styles.elemento}>{item}</Text>}
      />
    </View>
  );
}

// --- PANTALLA PRINCIPAL ---
export default function ListasScreen() {
  const [pantalla, setPantalla] = useState('flat');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Práctica Guiada de Listas</Text>

      <View style={styles.contenedorBotones}>
        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('flat')}>
          <Text style={styles.textoBoton}>Ver FlatList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setPantalla('secciones')}>
          <Text style={styles.textoBoton}>Ver SectionList</Text>
        </TouchableOpacity>
      </View>

      {pantalla === 'flat' ? <MiFlatList /> : <MiSectionList />}
    </View>
  );
}

// --- ESTILOS UNIFICADOS ---
const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#ffffff' },
  tituloPrincipal: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  contenedorBotones: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  boton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  textoBoton: { color: 'white', fontWeight: 'bold' },
  contenedorLista: { padding: 20 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  categoria: { fontSize: 16, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 5, marginTop: 10 },
  elemento: { fontSize: 15, paddingLeft: 10, marginVertical: 3 },
});
