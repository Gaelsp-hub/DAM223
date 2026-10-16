/* 1. ZONA DE IMPORTACIONES */
import { useState } from 'react';
import { Text, View, Button } from 'react-native';


export const Perfil = ({nombre,carrera,materia,cuatri}) => {
  const[mostrar,setmostrar]= useState(false);

  return (
    <View>
      <Text>{nombre}</Text>
      { mostrar && 
      <>
      <Text>{carrera}</Text>
      <Text>{materia}</Text>
      <Text>{cuatri}</Text>
      </>
      }
      <Button title="ver perfil" onPress={()=>setmostrar(!mostrar)}></Button>
    </View>
    
  );
}