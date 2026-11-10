import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Modal, Pressable } from 'react-native';

export const ControlEstado = ({ perfiles, onToggle }) => {
  // Estado para controlar la ventana emergente y su contenido
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    nombre: '',
    completada: false,
  });

  const handleSwitchChange = (id, nombre, nuevoValor) => {
    onToggle(id, nuevoValor);
    
    // Activa el alert emergente en pantalla
    setModalInfo({
      visible: true,
      nombre: nombre,
      completada: nuevoValor,
    });
  };

  const cerrarModal = () => {
    setModalInfo({ ...modalInfo, visible: false });
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

      {/* Ventana Emergente en Pantalla (Modal Alert) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalInfo.visible}
        onRequestClose={cerrarModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitulo}>¡Estado Actualizado!</Text>
            <Text style={styles.modalTexto}>
              El perfil de <Text style={{ fontWeight: 'bold' }}>{modalInfo.nombre}</Text> ahora está{' '}
              <Text style={{ color: modalInfo.completada ? 'green' : '#d32f2f', fontWeight: 'bold' }}>
                {modalInfo.completada ? 'Completado ✅' : 'Pendiente ⏳'}
              </Text>
            </Text>

            <Pressable style={styles.botonCerrar} onPress={cerrarModal}>
              <Text style={styles.textoBoton}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  // Estilos de la ventana emergente en pantalla
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalTexto: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  botonCerrar: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});