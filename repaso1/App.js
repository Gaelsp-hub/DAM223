import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView
} from 'react-native';

export default function App() {
  // Estados para los campos de texto
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Estados para los interruptores (Switch)
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const handleEnviar = () => {
    // 1. Validar que no existan campos vacíos
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    // 2. Validar que el semestre sea un número
    if (isNaN(semestre) || isNaN(Number(semestre))) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    // 3. Mostrar resumen en Alert si la validaciones son exitosas
    const mensaje = 
      `Nombre: ${nombre}\n` +
      `Carrera: ${carrera}\n` +
      `Semestre: ${semestre}\n\n` +
      `Taller: ${taller ? 'Sí' : 'No'}\n` +
      `Constancia: ${constancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${deportes ? 'Sí' : 'No'}`;

    Alert.alert('Registro enviado', mensaje, [{ text: 'Aceptar' }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registro de Evento Universitario</Text>

        {/* Campos de Captura */}
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.sectionTitle}>Opciones</Text>

        {/* Pregunta 1: Taller */}
        <View style={styles.switchRow}>
          <Text style={styles.label}>¿Asistirá al taller?</Text>
          <Switch
            value={taller}
            onValueChange={setTaller}
            trackColor={{ false: '#767577', true: '#4dd0e1' }}
            thumbColor={taller ? '#009688' : '#f4f3f4'}
          />
        </View>

        {/* Pregunta 2: Constancia */}
        <View style={styles.switchRow}>
          <Text style={styles.label}>¿Requiere constancia?</Text>
          <Switch
            value={constancia}
            onValueChange={setConstancia}
            trackColor={{ false: '#767577', true: '#4dd0e1' }}
            thumbColor={constancia ? '#009688' : '#f4f3f4'}
          />
        </View>

        {/* Pregunta 3: Deportes */}
        <View style={styles.switchRow}>
          <Text style={styles.label}>¿Participará en deportes?</Text>
          <Switch
            value={deportes}
            onValueChange={setDeportes}
            trackColor={{ false: '#767577', true: '#4dd0e1' }}
            thumbColor={deportes ? '#009688' : '#f4f3f4'}
          />
        </View>

        {/* Botón Enviar */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});