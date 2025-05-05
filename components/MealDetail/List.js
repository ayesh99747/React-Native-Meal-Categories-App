import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
    return data.map((listItem) => (
        <View key={listItem} style={styles.listItem}>
            <Text style={styles.itemText}>{listItem}</Text>
        </View>
    ));
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },
    itemText: {
        fontSize: 16,
        color: "#351401",
        textAlign: "center",
    },
});
