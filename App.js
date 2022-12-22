import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Navigation from './src/navigation';

export default function App() {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
