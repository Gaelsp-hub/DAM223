import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { TarjetaPerfil } from './components/components/TarjetaPerfil';
import { ControlEstado } from './components/components/ControlEstado';
import { ListaTareas } from './components/components/ListaTareas';

export default function App() {
  // Las tareas corresponden a cada perfil
  const [perfiles, setPerfiles] = useState([
    { id: '1', nombre: 'Gael', carrera: 'TIID', materia: 'Móvil', cuatri: '4', color: '#D1C4E9', completada: false },
    { id: '2', nombre: 'Alfredo', carrera: 'TIID', materia: 'Móvil', cuatri: '4', color: '#BBDEFB', completada: false },
    { id: '3', nombre: 'Paul', carrera: 'TIID', materia: 'Móvil', cuatri: '4', color: '#FFE0B2', completada: false },
  ]);

  // Cambia el estado de un perfil específico
  const toggleEstado = (id, nuevoValor) => {
    setPerfiles((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completada: nuevoValor } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        
        {/* 1. Tarjetas de Perfil */}
        <Text style={styles.seccionTitulo}>1. Perfiles</Text>
        <View style={styles.tarjetasRow}>
          {perfiles.map((p) => (
            <TarjetaPerfil
              key={p.id}
              nombre={p.nombre}
              carrera={p.carrera}
              materia={p.materia}
              cuatri={p.cuatri}
              color={p.color}
            />
          ))}
        </View>

        {/* 2. Control de Estado (Switch independiente para cada perfil) */}
        <Text style={styles.seccionTitulo}>2. Control de Estado por Perfil</Text>
        <ControlEstado perfiles={perfiles} onToggle={toggleEstado} />

        {/* 3. FlatList vinculado dinámicamente a los perfiles */}
        <Text style={styles.seccionTitulo}>3. Estado de Tareas / Perfiles (FlatList)</Text>
        <ListaTareas tareas={perfiles} />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  seccionTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
  },
  tarjetasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});