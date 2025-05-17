import {Image, ScrollView, StyleSheet, Text, View,} from "react-native";
import {useLayoutEffect} from "react";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite} from "../store/redux/favourites";
// import {FavouritesContext} from "../store/context/favourites-context";

export default function MealDetailScreen({route, navigation}) {
    // Switched to redux
    // const favouriteMealCtx = useContext(FavouritesContext);

    const favouriteMealIds = useSelector((state) => state.favoruiteMeals.ids);

    const dispatch = useDispatch();


    const {categoryId, mealId, categoryTitle} = route.params;

    // Switched to redux
    // const mealIsFavourite = favouriteMealCtx.ids.includes(mealId);

    const mealIsFavourite = favouriteMealIds.includes(mealId);

    function changeFavouriteStatusHandler() {
        if (mealIsFavourite) {
            // Switched to redux
            // favouriteMealCtx.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
        } else {
            // Switched to redux
            // favouriteMealCtx.addFavourite(mealId);
            dispatch(addFavourite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? "star" : "star-outline"}
                        color="white"
                        onPress={changeFavouriteStatusHandler}
                    />
                );
            },
        });
    }, [categoryTitle, changeFavouriteStatusHandler, navigation]);

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const {imageUrl, title, ingredients, steps} = selectedMeal;

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
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
                    <Subtitle title="Ingredients"/>
                    <List data={ingredients}/>
                    <Subtitle title="Steps"/>
                    <List data={steps}/>
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
