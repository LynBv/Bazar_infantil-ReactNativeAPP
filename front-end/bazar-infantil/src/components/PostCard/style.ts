import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap:20,
    padding:20,
    borderRadius: 50,
    borderWidth: 1

  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    gap: 10
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  postImg: {
    borderRadius: 50,
  },

  nomeUsuario: {
    fontSize: 30,
  },

  descricao: {
    fontSize: 20,
    padding: 20
  },
});
