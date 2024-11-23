import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        flexDirection: "row",
        width: "95%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 20,
        shadowColor: "#4B92A7",
        paddingBottom: 10,
        paddingTop: 10
      },

      infoUser: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },

      avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
      },

      nomeUsuario: {
        fontSize: 20,
        fontWeight: 600,
      },
    
});
