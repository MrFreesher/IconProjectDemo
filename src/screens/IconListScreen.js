import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import SimpleListItem from "../components/SimpleListItem";

class IconListScreen extends Component {
  constructor(props) {
    super(props);
  }
  data = [
    {
      src: "http://placehold.it/200x200?text=1",
    },
    {
      src: "http://placehold.it/200x200?text=2",
    },
    {
      src: "http://placehold.it/200x200?text=3",
    },
    {
      src: "http://placehold.it/200x200?text=4",
    },
    {
      src: "http://placehold.it/200x200?text=5",
    },
    {
      src: "http://placehold.it/200x200?text=6",
    },
    {
      src: "http://placehold.it/200x200?text=7",
    },
    {
      src: "http://placehold.it/200x200?text=8",
    },
  ];

  render() {
    return (
      <View>
        <FlatList
          numColumns={3}
          data={this.data}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <TouchableOpacity onPress={this.onClickList}>
                <Image
                  style={styles.imageThumbnail}
                  source={{ uri: item.src }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  onClickList = () => {
    this.props.navigation.navigate("IconDetails");
  };
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };
}
const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
export default IconListScreen;
