import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import MealsNavigator from "./MealsNavigator";
import FavoritesNavigator from "./FavoritesNavigator";

const Tab = createBottomTabNavigator();

const screenConfig = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: Colors.accentColor,
  tabBarLabelStyle: {
    fontFamily: "open-sans-bold",
  },

  tabBarIcon: (props) => {
    let iconName;
    if (route.name === "Meals") {
      iconName = "ios-restaurant";
    } else if (route.name === "Favorites") {
      iconName = "ios-star";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={25} color={props.color} />;
  },
});

export default function Home() {
  return (
    <Tab.Navigator screenOptions={screenConfig}>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} />
    </Tab.Navigator>
  );
}
