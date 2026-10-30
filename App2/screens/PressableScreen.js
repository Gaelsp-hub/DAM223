/*1.ZONA IMPORTACIONES*/
import { useState } from 'react';
import { StyleSheet, View, Text, Switch, Pressable } from 'react-native';

/*2.ZONA Main(componentes o screens)*/
export default function PressableScreen() {
  const [encendido, setEncendido] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Práctica: Switch y Pressable</Text>
      
      {/* 1. Corregido: Se pasa value como prop correctamente */}
      <Switch
        value={encendido}
        onValueChange={(valor) => setEncendido(valor)}
      />
      
      <Text style={styles.texto}>
        El switch está: {encendido ? 'Encendido' : 'Apagado'}
      </Text>
      
      {/* 2. Corregido: Se usa setContador incrementando el valor actual */}
      <Pressable
        style={styles.boton}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>
      
      {/* 3. Corregido: Se cambió style por styles (en plural) */}
      <Text style={styles.texto}>Veces presionado: {contador}</Text>
      
    </View>
  );
}

/*3.ZONA estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});