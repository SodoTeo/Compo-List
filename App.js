import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Compo List*/}
      <View style={styles.composWrapper}>
        <Text style={styles.sectionTitle}>Components List</Text>
        <View style={styles.items}>
          {/* Here will go the components*/}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  composWrapper :{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle :{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items :{},
});
