import { Image, Text, View } from "react-native";
import React from "react";
import ExemploImage from "../../assets/avatar/avatar1.png";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./style";

export default function PerfilCard() {
  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image style={styles.avatar} source={ExemploImage} />
        <Text style={styles.nomeUsuario}>Ana Julia</Text>
      </View>

      <IconM name="cog" size={30} color="#4A4A4A" />
    </View>
  );
}
