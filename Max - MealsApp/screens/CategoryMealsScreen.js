import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MeaList";

const CategoriesMeals = (props) => {
  const { categoryId: catId } = props.route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoriesMeals;
