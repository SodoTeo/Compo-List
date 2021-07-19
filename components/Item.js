import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const Item = (props) => {
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.deleteItem}>
        <Text style={styles.deleteItemText}>{props.text}Delete</Text>
      </View>
    );
  };
  return (
    <Swipeable
      renderRightActions={rightSwipe}
      onSwipeableRightOpen={props.handleDelete}
    >
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.splash}>
            {/*TODO: Component splash ie mobo*/}
          </View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.statusItem}>
          {/*TODO: price tag /if pressed=>color:green*/}
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  splash: {
    width: 53,
    height: 41,
    backgroundColor: "#555" /*For testing purposes*/,
    marginRight: 15,
    borderRadius: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  statusItem: {
    width: 36,
    height: 36,
    left: 15,
    backgroundColor: "#F23030",
    borderRadius: 15,
  },
  deleteItem: {
    width: "100%",
    height: 80,
    backgroundColor: "#F23030",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 30,
  },
  deleteItemText: {
    color: "#1b1a17",
    paddingHorizontal: 10,
    fontSize: 14,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default Item;
