import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />

            <NavigationContainer>
                <Stack.Navigator
                    id="main"
                    screenOptions={{
                        headerStyle: { backgroundColor: "#24180f" },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        headerTitleStyle: { fontSize: 24 },
                        contentStyle: { backgroundColor: "#3f2425" },
                    }}
                >
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                        options={{
                            title: "Meal Categories",
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // options={({route, navigation}) => {
                        //     const {categoryTitle} = route.params;
                        //     return {
                        //         title: categoryTitle,
                        //     }
                        // }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                        // options={({route, navigation}) => {
                        //     const {mealId} = route.params;
                        //     return {
                        //         title: mealId,
                        //     }
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#24180f",
    },
});
