import {CATEGORIES} from '../data/dummy-data'
import {FlatList, StyleSheet, View} from 'react-native'
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

export default function CategoriesScreen() {
    return (
        <View style={styles.container}>
            <FlatList data={CATEGORIES}
                      keyExtractor={(item) => item.id}
                      renderItem={renderCategoryItem}
                      numColumns={2}
                      style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
    },
})