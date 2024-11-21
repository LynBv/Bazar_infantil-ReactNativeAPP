import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    padding: 20,
    borderRadius: 30,
    elevation: 20,
    shadowColor: "#4B92A7",
    paddingBottom: 5,
    paddingTop: 10
  },

  estiloTexto: {
    color: "#4A4A4A",
  },

  descricaoCard:{
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#4B92A7",
    gap: 15,
  },

  infoUser: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },

  infoCompra: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },

  precoCard: {
    backgroundColor: "#88d8b0",
    borderRadius: 20,
    minWidth: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  preco: {
    padding: 10,
    fontSize: 20,
    color: "white",
    fontWeight: 600,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  postImg: {
    borderRadius: 50,
    width: 290,
    height: 290,
    resizeMode: "contain",
  },

  nomeUsuario: {
    fontSize: 20,
    fontWeight: 600,
  },

  descricao: {
    fontSize: 18,
    fontWeight: 500
  },

  more: {
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
