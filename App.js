
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item, { Task } from './components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Compo List*/}
      <View style={styles.composWrapper}>
        <Text style={styles.sectionTitle}>Components List</Text>
        <View style={styles.items}>
          {/* Here will go the components*/}
          <Item text={'Component 1'}/>
          <Item text={'Component 2'}/>
          <Item text={'Component 3'}/>
          <Item text={'Component 4'}/>
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
