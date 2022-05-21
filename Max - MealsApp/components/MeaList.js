import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useEffect } from "react";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        onSelectMeal={() =>
          props.navigation.navigate("MealDetailsScreen", {
            mealId: itemData.item.id,
            title: itemData.item.title,
          })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
