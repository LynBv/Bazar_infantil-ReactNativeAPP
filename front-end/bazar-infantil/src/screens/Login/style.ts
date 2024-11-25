import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#96ceb410",
    },

    title: {
        fontSize: 35,
        color: "#7956a1",
        marginBottom: 10,
        marginTop:30,
        fontWeight: "bold",
        textAlign: "center",
    },

    subtitle: {
        fontSize: 15,
        color: "#7956a1",
        marginBottom: 24,
        fontWeight: "bold",
        textAlign: "center",
    },

    logoImage: {
        alignSelf: "center",
        width: 230,
        height: 230,
        marginBottom: 20,
    },

    signupText: {
        marginTop: 30,
        fontSize: 14,
        textAlign: "center",
        color: "#555",
    },

    link: {
        color: "#7956a1",
        fontWeight: "bold",
    },
});
