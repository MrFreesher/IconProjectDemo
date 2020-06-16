import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SimpleListItem = ({ title, onClickList }) => {
  return (
    <TouchableOpacity onPress={onClickList}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  text: {
    fontSize: 26,
  },
});
export default SimpleListItem;
