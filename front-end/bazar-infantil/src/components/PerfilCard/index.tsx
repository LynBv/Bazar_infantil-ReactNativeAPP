import { Image, Text, View } from "react-native";
import React from "react";
import ExemploImage from "../../assets/avatar/avatar1.png";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./style";
import { PropsPerfilCard } from "./type";

export default function PerfilCard({avatar, nomeUsuario}:PropsPerfilCard) {
  const avatarImage = "data:image/png;base64," + avatar;
  
  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image style={styles.avatar} source={{uri: avatarImage}} />
        <Text style={styles.nomeUsuario}>{nomeUsuario}</Text>
      </View>

      <IconM name="cog" size={30} color="#4A4A4A" />
    </View>
  );
}
