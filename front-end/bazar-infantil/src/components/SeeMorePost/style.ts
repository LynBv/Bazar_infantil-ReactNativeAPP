import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#96ceb430",
        paddingHorizontal: 35,
    },

    ownerInfo: {
        paddingVertical: 10,
        backgroundColor: "#7956a1",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 60,
    },

    ownerAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
        marginLeft: 15,
    },

    ownerName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    postInfo: {
        marginBottom: -20,
    },

    postTitle: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
        color: "#7956a1",
    },

    postPhoto: {
        width: 220,
        height: 220,
        marginTop: 80,
        borderRadius: 8,
        transform: [{ translateX: 60 }, { translateY: -50 }],
    },

    postDescricao: {
        fontSize: 20,
        //marginBottom: 10, 
        marginTop: 10,
        textAlign: "center",
        justifyContent: "center",
        color: "#7956a1",
    },

    postSmallDetails: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginVertical: 5,
    },

    postCateg: {
        fontSize: 14,
        backgroundColor: "#96ceb4",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        textAlign: "center",
        color: "#fff",
    },

    postData: {
        fontSize: 16,
        textAlign: "center",
        color: "#7956a1",
        opacity: 0.7,
    },

    postPreco: {
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "#7956a1",
        width: "35%",
        borderRadius: 8,
        transform: [{ translateX: 110 }],
        color: "#fff",
    },
  

  buttonArea:{
    width: "85%", 
  },

  buttonAdd:{
    width:"100%",
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#40cc60",
    borderRadius:20,
    transform: [{translateX: 25}, {translateY: -10}]
  },

  buttonText:{
    fontSize: 22,
  },
});
