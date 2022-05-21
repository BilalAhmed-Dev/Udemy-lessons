import * as React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";

const stackScreenOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : Colors.accentColor,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerLeft: () => {
    return (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          title="Menu"
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    );
  },
});

export default stackScreenOptions;
