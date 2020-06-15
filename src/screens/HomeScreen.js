import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to IMAGE Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter/State Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to RandomColor Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen Demo"
        onPress={() => navigation.navigate("Box")}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
