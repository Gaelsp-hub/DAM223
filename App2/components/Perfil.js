import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri, color = 'white' }) => {
  const [mostrar, setmostrar] = useState(false);

  return (
    <View style={[estilos.tarjeta, { backgroundColor: color }]}>
      <Text style={estilos.nombres}>{nombre}</Text>

      {mostrar && (
        <>
          <Text style={estilos.carrera}>{carrera}</Text>
          <Text style={estilos.otroTexto}>{materia}</Text>
          <Text style={estilos.otroTexto}>{cuatri}</Text>
        </>
      )}

      <Button title="ver perfil" onPress={() => setmostrar(!mostrar)} />
    </View>
  );
};

const estilos = StyleSheet.create({
  nombres: {
    fontSize: 24,
    fontWeight: '800', // <-- Se corrigió agregando las comillas
    textTransform: 'uppercase',
  },
  carrera: {
    fontSize: 20,
  },
  // ... resta de estilos
});