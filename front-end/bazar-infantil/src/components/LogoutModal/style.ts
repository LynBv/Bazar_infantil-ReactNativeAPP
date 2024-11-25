import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "white",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    borderRadius: 30,
    elevation: 20,
    shadowColor: "#4B92A7",
    paddingBottom: 5,
    paddingTop: 10,
  },

  estiloTexto: {
    color: "#4A4A4A",
  },

  options: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 15,
    justifyContent: "space-around",
  },
});
