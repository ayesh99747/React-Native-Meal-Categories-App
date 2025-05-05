import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({ title }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#e3b497",
        textAlign: "center",
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: "#e3b497",
    },
});
