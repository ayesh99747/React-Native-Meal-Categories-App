import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem(itemData) {
    const navigation = useNavigation();
    const mealPressHandler = () => {
        navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            categoryId: itemData.item.categoryIds,
            categoryTitle: itemData.item.title,
        });
    };
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={mealPressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: itemData.item.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{itemData.item.title}</Text>
                    </View>
                    {/* Details */}
                    <MealDetails
                        duration={itemData.item.duration}
                        complexity={itemData.item.complexity.toUpperCase()}
                        affordability={itemData.item.affordability.toUpperCase()}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
});
