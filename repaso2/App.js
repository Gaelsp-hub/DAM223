import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView
} from 'react-native';

export default function App() {
  // 1. Estado para la pantalla de bienvenida (Splash Screen)
  const [cargandoSplash, setCargandoSplash] = useState(true);

  // 2. Estados para los campos del formulario
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  // 3. Estado para controlar la simulación de carga al guardar (4 segundos)
  const [guardando, setGuardando] = useState(false);

  // 4. Estado para almacenar el listado de libros agregados
  const [libros, setLibros] = useState([]);

  // Efecto para mostrar el SplashScreen durante 2 segundos al iniciar
  useEffect(() => {
    const timer = setTimeout(() => {
      setCargandoSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Función ejecutada al presionar el botón "Agregar libro"
  const agregarLibro = () => {
    // Validar que los tres campos contengan texto
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    // Activar indicador de carga
    setGuardando(true);

    // Simular tiempo de espera de 4 segundos
    setTimeout(() => {
      // Crear objeto del libro
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      // Agregar a la lista
      setLibros((librosActuales) => [nuevoLibro, ...librosActuales]);

      // Limpiar inputs
      setTitulo('');
      setAutor('');
      setGenero('');

      // Desactivar indicador de carga
      setGuardando(false);

      // Confirmación con Alert
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  // --- Vista 1: SplashScreen de Bienvenida (2 Segundos) ---
  if (cargandoSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>Bienvenido</Text>
        <Text style={styles.splashSubtitle}>Catálogo de Libros</Text>
        <ActivityIndicator size="large" color="#0056b3" style={{ marginTop: 20 }} />
      </View>
    );
  }

  // --- Vista 2: Pantalla Principal ---
  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/OIP.QY7o30i7RWEKCV4MTRVlnQHaE7?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Catálogo de Libros</Text>

          {/* Formulario */}
          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#666"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#666"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#666"
            value={genero}
            onChangeText={setGenero}
          />

          {/* Botón Pressable / ActivityIndicator */}
          {guardando ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="small" color="#ffffff" />
              <Text style={styles.loadingText}>Guardando...</Text>
            </View>
          ) : (
            <Pressable style={styles.button} onPress={agregarLibro}>
              <Text style={styles.buttonText}>Agregar Libro</Text>
            </Pressable>
          )}

          {/* Contador de libros */}
          <Text style={styles.counterText}>Total de libros: {libros.length}</Text>

          {/* Listado con FlatList */}
          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardText}>Autor: {item.autor}</Text>
                <Text style={styles.cardText}>Género: {item.genero}</Text>
              </View>
            )}
            style={styles.list}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  splashSubtitle: {
    fontSize: 18,
    color: '#475569',
    marginTop: 8,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Capa oscura para legibilidad
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  loadingText: {
    color: '#ffffff',
    marginLeft: 10,
    fontSize: 16,
  },
  counterText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 15,
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#374151',
  },
});