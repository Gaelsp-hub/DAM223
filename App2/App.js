import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeScreen from './screens/SafeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SafeScreen />
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,    backgroundColor: '#ffffff',
  },});

  //SafeAreaView & ScrollView