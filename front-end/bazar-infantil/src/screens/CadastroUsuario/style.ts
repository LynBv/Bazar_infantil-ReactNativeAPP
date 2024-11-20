import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#96ceb430",
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
    },

    avatarTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
        color: "#00000080",
        marginTop: 50,
    },

    avatarContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginVertical: 10,
    },

    avatarImage: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "transparent",
        marginTop: 15,
    },

    avatarSelected: {
        borderColor: "#96ceb4",
        borderWidth: 5,
    },
});
