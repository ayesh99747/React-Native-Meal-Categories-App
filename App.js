import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#24180f" },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 24 },
                sceneStyle: { backgroundColor: "#3f2425" },
                drawerContentStyle: { backgroundColor: "#351401" },
                drawerInactiveTintColor: "white",
                drawerActiveTintColor: "#351401",
                drawerActiveBackgroundColor: "#e4baa1",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="list-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    title: "Favourite Meals",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="star-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

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
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
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
