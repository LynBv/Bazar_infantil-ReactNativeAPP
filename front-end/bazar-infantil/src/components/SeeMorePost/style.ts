import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#96ceb430",
        paddingHorizontal: 45,
        paddingTop: 15,
    },

    ownerInfo: {
        paddingVertical: 5,
        backgroundColor: "#7956a1",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 100,
    },

    ownerName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
    },

    postInfo: {
        marginBottom: 20,
        alignItems: "center",
    },

    postTitle: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
        color: "#7956a1",
    },

    postDescricao: {
        fontSize: 22,
        marginBottom: 10,
        marginTop: 20,
        textAlign: "center",
        justifyContent: "center",
        color: "#7956a1",
    },

    postSmallDetails: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginVertical: 10,
        gap: 1,
    },

    postCateg: {
        fontSize: 14,
        backgroundColor: "#96ceb4",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        borderRadius: 15,
        textAlign: "center",
        color: "#fff",
    },

    postData: {
        fontSize: 16,
        textAlign: "center",
        color: "#7956a1",
        opacity: 0.7,
        marginTop: 20,
    },

    postPreco: {
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 30,
        padding: 10,
        backgroundColor: "#7956a1",
        width: "35%",
        borderRadius: 8,
        color: "#fff",
    },

    buttonArea: {
        width: "85%",
    },

    buttonAdd: {
        width: "100%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#96ceb4",
        marginTop: 20,
        borderRadius: 20,
        transform: [{ translateX: 25 }, { translateY: -10 }],
    },

    buttonText: {
        fontSize: 22,
        color: "#fff",
    },
});
