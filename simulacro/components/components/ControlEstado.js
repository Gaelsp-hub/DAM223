import React from 'react';
import { StyleSheet, Text, View, Switch, Alert } from 'react-native';

export const ControlEstado = ({ perfiles, onToggle }) => {
  const handleSwitchChange = (id, nombre, nuevoValor) => {
    onToggle(id, nuevoValor);
    Alert.alert(
      "Estado Actualizado",
      `Perfil de ${nombre}: ${nuevoValor ? 'Completado ✅' : 'Pendiente ⏳'}`
    );
  };

  return (
    <View style={styles.container}>
      {perfiles.map((p) => (
        <View key={p.id} style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {p.nombre}: {p.completada ? 'Completado ✅' : 'Pendiente ⏳'}
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#4CAF50' }}
            thumbColor={p.completada ? '#81C784' : '#f4f3f4'}
            onValueChange={(val) => handleSwitchChange(p.id, p.nombre, val)}
            value={p.completada}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});