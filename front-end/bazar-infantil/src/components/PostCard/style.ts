import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    borderRadius: 50,
    elevation: 20,
    shadowColor: "#4B92A7",
  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    gap: 10,
  },

  precoCard: {
    backgroundColor: "#96CEB4",
    borderRadius: 20,
    //backgroundColor: "gray"
  },

  preco: {
    padding: 10,
    fontSize: 20,
    color: "white",
    fontWeight: 600,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  postImg: {
    borderRadius: 50,
  },

  nomeUsuario: {
    fontSize: 20,
  },

  descricao: {
    fontSize: 20,
  },
});
