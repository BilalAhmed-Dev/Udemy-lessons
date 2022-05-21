import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MeaList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
