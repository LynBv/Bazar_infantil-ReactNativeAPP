import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxInput: {
        width: 350,
        height: 50,
        marginBottom: 15,
        overflow: "hidden",
    },

    input: {
        height: 50,
        borderColor: "#96ceb4",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },

    boxIcon: {
        position: "absolute",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        width: 40,
        paddingRight: 10,
    },
});
