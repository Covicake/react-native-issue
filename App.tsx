import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <TouchableOpacity disabled accessibilityLabel="test" style={styles.container}>
      <Text style={{color: 'white'}}>Open up App.tsx to start working on your app!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    margin: 'auto',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
