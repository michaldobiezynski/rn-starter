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
