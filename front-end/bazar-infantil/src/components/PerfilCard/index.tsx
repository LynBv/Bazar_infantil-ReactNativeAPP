import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./style";
import { PropsPerfilCard } from "./type";

export default function PerfilCard({ avatar, nomeUsuario, handleModal}: PropsPerfilCard) {
  const avatarImage = "data:image/png;base64," + avatar;

  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image style={styles.avatar} source={{ uri: avatarImage }} />
        <Text style={styles.nomeUsuario}>{nomeUsuario}</Text>
      </View>
      <TouchableOpacity onPress={handleModal}>
        <IconM name="logout" size={30} color="#4A4A4A" />
      </TouchableOpacity>
    </View>
  );
}
