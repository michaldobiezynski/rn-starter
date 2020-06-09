import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "10" },
    { name: "Friend #2", age: "23" },
    { name: "Friend #3", age: "55" },
    { name: "Friend #4", age: "76" },
    { name: "Friend #5", age: "33" },
    { name: "Friend #6", age: "45" },
    { name: "Friend #7", age: "98" },
    { name: "Friend #8", age: "5" },
    { name: "Friend #9", age: "13" },
    // { name: "Friend #1", key: Math.random().toString() },
    // { name: "Friend #2", key: Math.random().toString() },
    // { name: "Friend #3", key: Math.random().toString() },
    // { name: "Friend #4", key: Math.random().toString() },
    // { name: "Friend #5", key: Math.random().toString() },
    // { name: "Friend #6", key: Math.random().toString() },
    // { name: "Friend #7", key: Math.random().toString() },
    // { name: "Friend #8", key: Math.random().toString() },
    // { name: "Friend #9", key: Math.random().toString() },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // console.log(element.item.name);
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
