import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export const ListaTareas = ({ tareas }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemTarea}>
      <Text style={styles.tituloTarea}>
        {item.nombre} - {item.materia} ({item.carrera})
      </Text>
      <Text
        style={[
          styles.badgeEstado,
          item.completada ? styles.badgeCompletada : styles.badgePendiente
        ]}
      >
        {item.completada ? 'Completado' : 'Pendiente'}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 8,
  },
  itemTarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
  },
  tituloTarea: {
    fontSize: 13,
    fontWeight: '500',
  },
  badgeEstado: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 11,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  badgeCompletada: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  badgePendiente: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
  },
});