import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>

            <NavigationContainer>
                <Stack.Navigator id="main">
                    <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                        headerStyle: {backgroundColor: '#24180f'},
                        headerTintColor: 'white',
                        title: 'Meal Categories',
                        headerTitleStyle: {fontSize: 24},
                    }}/>
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{
                        headerStyle: {backgroundColor: '#24180f'},
                        headerTintColor: 'white',
                        title: 'Meals Overview',
                        headerTitleStyle: {fontSize: 24},
                    }}/>
                </Stack.Navigator>

            </NavigationContainer>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24180f',
    },
});
