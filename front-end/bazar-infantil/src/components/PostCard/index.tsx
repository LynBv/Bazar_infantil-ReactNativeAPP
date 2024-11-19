import { View, Text, Image } from "react-native";
import React from "react";
import avatar from "../../assets/avatar/avatar1.png";
import roupa from "../../assets/roupas/roupa1.png";
import { styles } from "./style";

const PostCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.nomeUsuario}>Ana</Text>
      </View>
      <Image source={roupa} style={styles.postImg} />
      <Text style={styles.descricao}>
        Descricao do produto bla bla bla bla bla bla bla bla bla
      </Text>
    </View>
  );
};

export default PostCard;
