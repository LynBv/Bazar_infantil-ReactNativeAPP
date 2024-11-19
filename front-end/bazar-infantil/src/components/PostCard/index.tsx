import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { PropsCard } from "./type";
import IconM from '@expo/vector-icons/MaterialCommunityIcons';

const PostCard = ({ postagem }: PropsCard) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image source={postagem.fotoUsuario} style={styles.avatar} />
        <Text style={styles.nomeUsuario}>{postagem.nomeUsuario}</Text>
      </View>
      <Image source={postagem.fotoPostagem} style={styles.postImg} />
      <View style={styles.precoCard}>
        <Text style={styles.preco}>{`R$${postagem.preco}`}</Text>
      </View>
      <Text style={styles.descricao}>{postagem.conteudo}</Text>
      <TouchableOpacity style={styles.more}>
        <Text>VER MAIS DETALHES</Text>
        <IconM name="chevron-down" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
