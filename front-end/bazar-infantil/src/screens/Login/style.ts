import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#96ceb410",
    },

    title: {
        fontSize: 40,
        color: "#7956a1",
        marginBottom: 10,
        marginTop: 40,
        fontWeight: "bold",
        textAlign: "center",
    },

    subtitle: {
        fontSize: 20,
        color: "#7956a1",
        marginBottom: 24,
        marginTop: 0,
        fontWeight: "bold",
        textAlign: "center",
    },

    logoImage: {
        alignSelf: "center",
        width: 250,
        height: 250,
        marginBottom: 40,
    },

    signupText: {
        marginTop: 40,
        fontSize: 14,
        textAlign: "center",
        color: "#555",
    },

    link: {
        color: "#7956a1",
        fontWeight: "bold",
    },
});
