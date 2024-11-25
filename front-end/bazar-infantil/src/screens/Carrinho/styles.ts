import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  header: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#7956a1",
    marginTop: 30,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
  },

  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
  },
  
  removeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
  },

  removeButtonText: {
    color: "#fff",
    fontSize: 14,
  },

  footerContainer: {
    marginBottom:30,
  },
  
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  clearButton: {
    marginTop: 20,
    backgroundColor: "#96ceb4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },

  clearButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  totalContainer: {
    position: "absolute",
    bottom: 10,
    left: 10, 
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 
  
});
