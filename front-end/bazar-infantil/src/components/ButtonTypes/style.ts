import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    styleButton: {
        width: 150,
        height: Platform.OS === "android" ? 50 : 90,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },

    text: {
        color: "#fff",
        fontSize: width < 767 ? 20 : 50,
        fontWeight: "bold",
    },
});
