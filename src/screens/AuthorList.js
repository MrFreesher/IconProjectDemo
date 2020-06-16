import React, { Component } from "react";
import { View, FlatList } from "react-native";

import SimpleListItem from "../components/SimpleListItem";

class AuthorList extends Component {
  constructor(props) {
    super(props);
  }
  data = [
    {
      name: "Author 1",
    },
    { name: "Author 2" },
  ];

  render() {
    return (
      <View>
        <FlatList
          data={this.data}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <SimpleListItem title={item.name} onClickList={this.onClickList} />
          )}
        />
      </View>
    );
  }

  onClickList = () => {
    this.props.navigation.navigate("Collections");
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

export default AuthorList;
