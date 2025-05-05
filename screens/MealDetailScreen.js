import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

export default function MealDetailScreen({ route, navigation }) {
    const { categoryId, mealId, categoryTitle } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryTitle, navigation]);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const { imageUrl, title, ingredients, steps } = selectedMeal;

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            {/* Details */}
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity.toUpperCase()}
                affordability={selectedMeal.affordability.toUpperCase()}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle title="Ingredients" />
                    <List data={ingredients} />
                    <Subtitle title="Steps" />
                    <List data={steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    listContainer: {
        width: "80%",
    },
    listOuterContainer: {
        width: "100%",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8,
        color: "white",
    },
    detailText: {
        color: "white",
    },
});
