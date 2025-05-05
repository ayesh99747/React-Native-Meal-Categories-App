import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
    const { categoryId, categoryTitle } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryTitle, navigation]);

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <View>
                <MealItem item={itemData.item} />
            </View>
        );
    }

    return (
        <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
