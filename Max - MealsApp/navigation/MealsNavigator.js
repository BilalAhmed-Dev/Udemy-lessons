import * as React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMeals from "../screens/CategoryMealsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealDetailScreen from "../screens/MealDetailsScreen";
import stackScreenOptions from "../components/DefaultStackScreenOptions";
import { toggleFavorite } from "../store/actions/mealsActions";

import { useDispatch, useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  /// This code needs refactoring, it sets the star of star Icon from active to inactive....
  const currentsFavorites = useSelector((state) => state.meals.favoriteMeals);
  const starIconHandler = (route) => {
    return currentsFavorites.some((meal) => meal.id === route.params.mealId)
      ? "ios-star"
      : "ios-star-outline";
  };
  /// The above code needs refactoring, it sets the star of star Icon from active to inactive....

  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="CategoriesMeals"
        component={CategoriesMeals}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="MealDetailsScreen"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName={starIconHandler(route)}
                onPress={() => {
                  toggleFavoriteHandler(route.params.mealId);
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
