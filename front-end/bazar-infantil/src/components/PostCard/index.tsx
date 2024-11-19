import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { PropsCard } from "./type";

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
      <Text>VER MAIS DETALHES</Text>
    </View>
  );
};

export default PostCard;
