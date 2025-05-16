import {useLayoutEffect} from "react";
import {StyleSheet} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({route, navigation}) {
    const {categoryId, categoryTitle} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryTitle, navigation]);

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    return (
        <MealsList items={displayedMeals}/>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});