import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import MenuScreen from './screens/MenuScreen'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});