import {Text, View} from "react-native";


export default function MealsOverviewScreen({route}) {
    const {categoryId} = route.params;
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
            <Text>Category ID: {categoryId}</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
};