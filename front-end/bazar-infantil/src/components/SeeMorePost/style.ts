import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  shadow: {
    height:"100%",
    width:"96%",
    position:"absolute",
    left: 6,
    backgroundColor:"#00000033",
  },

  container: {
    flex: 1,
    width: "95%",
    backgroundColor: "#f0f0e0c0",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#77777744",
    borderRadius: 5,
    transform: [{ translateX: 8 }, { translateY: 25 }],
    zIndex:1,
  },

  ownerInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 25,
    backgroundColor: "#e0f0f095",
    borderRadius: 20,
    transform: [{ translateY: 10 }],
  },

  ownerAvatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  ownerName: {
    fontSize: 22,
    fontWeight: "bold",
  },

  postInfo: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 65,
    borderRadius: 15,
    position: "relative",
    top: 30,
  },

  postPhoto: {
    width: 220,
    height: 220,
    borderRadius: 25,
    transform: [{translateX: 50}, {translateY: -65}]
  },

  postDescricao:{
    fontSize: 18,
    fontWeight:"300",
    textAlign:"justify"
  },

  postData:{
    fontSize: 12,
    textAlign:"center",
    color:"#555",
    opacity: 0.7,
  },

  postPreco:{
    fontSize: 20,
    textAlign:"center",
    marginTop: 10,
    padding: 10,
    backgroundColor:"#ddf",
    width: "35%",
    borderRadius: 15,
    transform: [{translateX: 100}],
    textShadowColor: "#000",
    textShadowRadius: 15,
    color: "#ff60aa"
  },

  postTitle:{
    fontSize: 40,
    textAlign:"center",
    fontWeight:"bold",
  },

  postSmallDetails:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-evenly",
  },

  postCateg:{
    fontSize:14,
    backgroundColor:"#7a7a7a60",
    borderRadius: 15,
    
  },
});
