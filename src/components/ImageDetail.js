import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageDetail }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageDetail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
