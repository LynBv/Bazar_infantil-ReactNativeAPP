import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { PropsPostagem } from "../FeedRow/type";

const PostCard = ({ postagem }: PropsPostagem) => {
  const avatarImage = "data:image/png;base64," + postagem.usuarioDTO.base64;
  const postImage = "data:image/png;base64," + postagem.foto[0].dados;
  const navigation = useNavigation();

  return (

    <View style={styles.card}>

      <View style={styles.infoUser}>
        <Image source={{ uri: avatarImage }} style={styles.avatar} />
        <Text style={[styles.nomeUsuario, styles.estiloTexto]}>
          {postagem.usuarioDTO.nome}
        </Text>
      </View>

      <Image source={{ uri: postImage }} style={styles.postImg} />

      <View style={styles.descricaoCard}>
      
      <Text style={[styles.descricao, styles.estiloTexto]}>
        {postagem.titulo}
      </Text>
      </View>

      <View style={styles.infoCompra}>

        <View style={styles.precoCard}>
          <Text style={styles.preco}>{`R$${postagem.preco}`}</Text>
        </View>

        <TouchableOpacity >
        <IconM name="cart-arrow-down" size={45} color="#96CEB4" />
        </TouchableOpacity>
        
      </View>
      <Text style={[styles.descricao, styles.estiloTexto]}>{postagem.conteudo}</Text>
      <TouchableOpacity style={styles.more} onPress={() => navigation.navigate("StackPostagem", {postagem: {postagem}})}>
        <Text style={[]}>VER MAIS DETALHES</Text>
        <IconM name="chevron-down" size={30} color="#4A4A4A" />
      </TouchableOpacity>

    </View>
  );
};

export default PostCard;
