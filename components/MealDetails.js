import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) {
    return (
        <View style={[style, styles.details]}>
            <Text style={[textStyle, styles.detailItem]}>{duration}m</Text>
            <Text style={[textStyle, styles.detailItem]}>{complexity}</Text>
            <Text style={[textStyle, styles.detailItem]}>{affordability}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
