import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = <Text style={styles.name}>Michal</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
