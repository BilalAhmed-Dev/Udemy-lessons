import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterScreen from "../screens/FilterScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

import CustomHeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },

        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.accentColor,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
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
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          );
        },
        headerRight: () => {
          return (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="ios-save"
                title="Save"
                onPress={() => route.params.save()}
              />
            </HeaderButtons>
          );
        },
      })}
    >
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          title: "Filter Meals",
        }}
      />
    </Stack.Navigator>
  );
};

export default FiltersNavigator;
