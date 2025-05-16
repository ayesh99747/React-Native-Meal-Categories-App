import {FavouritesContext} from "../store/context/favourites-context";
import {useContext} from "react";
import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

export default function FavouritesScreen() {

    const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMeals = MEALS.filter((meal) => {
        return favouriteMealsCtx.ids.includes(meal.id)
    });

    if (favouriteMeals.length > 0) {
        return <MealsList items={favouriteMeals}/>;
    } else {
        return (<View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite meals yet!</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        color: "white",
    }
});