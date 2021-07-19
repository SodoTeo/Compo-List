import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Item, { Task } from "./components/Item";

export default function App() {
  const [item, setItem] = useState();
  const [itemItems, setItemItems] = useState([]);

  const handleAddItem = () => {
    Keyboard.dismiss();
    setItemItems([...itemItems, item]);
    setItem(null);
  };

  const deleteItem = (index) => {
    let itemsCopy = JSON.parse(JSON.stringify(itemItems));
    itemsCopy.splice(index, 1);
    setItemItems(itemsCopy);
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <View style={styles.container}>
      {/*Compo List*/}
      <View style={styles.composWrapper}>
        <Text style={styles.sectionTitle}>Components List</Text>
        <ScrollView>
          <View style={styles.items}>
            {/* Here will go the components*/}
            {itemItems.map((item, index) => {
              return (
                <Item
                  key={generateKey(item)+index}
                  text={item + " index--> " + index}
                  handleDelete={() => deleteItem(index)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Component info add */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItemWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your PC component"}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addItem}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  composWrapper: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeItemWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addItem: {},
});
