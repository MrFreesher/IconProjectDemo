import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthorList from "./src/screens/AuthorList";
import CollectionList from "./src/screens/CollectionList";
import IconListScreen from "./src/screens/IconListScreen";
import IconDetails from "./src/screens/IconDetails";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authors" component={AuthorList} />
        <Stack.Screen name="Collections" component={CollectionList} />
        <Stack.Screen name="IconList" component={IconListScreen} />
        <Stack.Screen name="IconDetails" component={IconDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
