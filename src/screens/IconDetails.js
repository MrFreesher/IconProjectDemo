import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
const IconDetails = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageThumbnail}
        source={{ uri: "http://placehold.it/200x200?text=8" }}
      />
      <Text style={styles.textHeader}>Icon name</Text>
      <Text style={styles.textContent}>Alarm icon</Text>
      <Text style={styles.textHeader}>Author</Text>
      <Text style={styles.textContent}>Author 1</Text>
      <Text style={styles.textHeader}>Collection</Text>
      <Text style={styles.textContent}>Notifications</Text>
      <Button title="Download icon" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  textHeader: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
  },
  textContent: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default IconDetails;
