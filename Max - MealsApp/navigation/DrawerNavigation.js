import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FavoritesNavigator from "./FavoritesNavigator";
import Home from "./TabsNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FiltersNavigator from "./FiltersNavigation";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "orange",
          drawerLabelStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 23,
          },
        }}
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          options={{ drawerLabel: "Meals" }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen name="Favorites" component={FavoritesNavigator} />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
