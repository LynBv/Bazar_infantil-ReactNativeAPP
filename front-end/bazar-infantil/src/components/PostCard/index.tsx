import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { PropsPostagem } from "./type";
import { useAuth } from "../../hooks/useAuth";
import { DeletePostagemUsuario } from "../../services/DeletePostagemUsuario";

const PostCard = ({ postagem, isOnProfile }: PropsPostagem) => {
  const navigation = useNavigation();
  const { usuario } = useAuth();
  const isTheOwner: boolean = postagem.usuarioDTO.id === usuario.id;
  const showDelete: boolean = isTheOwner && isOnProfile;

  const avatarImage = "data:image/png;base64," + postagem.usuarioDTO.base64;
  const postImage = "data:image/png;base64," + postagem.foto[0].dados;

  const handleDelete = async () => {
    const response = await DeletePostagemUsuario(postagem.id.toString())

    if (response && response.status === 204) {
      alert("postagem deletada com sucesso")
    } else {
      console.error("nao deletou");
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoUser}>
        <Image source={{ uri: avatarImage }} style={styles.avatar} />
        <Text style={[styles.nomeUsuario, styles.estiloTexto]}>
          {postagem.usuarioDTO.nome}
        </Text>
        {showDelete && (
          <TouchableOpacity onPress={handleDelete}>
            <IconM name="delete" size={30} color="#ff6f69" />
          </TouchableOpacity>
        )}
      </View>

      <Image source={{ uri: postImage }} style={styles.postImg} />

      <View style={styles.descricaoCard}>
        <Text style={[styles.titulo, styles.estiloTexto]}>
          {postagem.titulo}
        </Text>
      </View>

      <View style={styles.infoCompra}>
        <View style={styles.precoCard}>
          <Text style={styles.preco}>{`R$${postagem.preco}`}</Text>
        </View>

        <TouchableOpacity>
          <IconM name="cart-arrow-down" size={45} color="#96CEB4" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.more}
        onPress={() =>
          navigation.navigate("StackPostagem", { postagem: postagem })
        }
      >
        <Text style={[]}>VER MAIS DETALHES</Text>
        <IconM name="chevron-down" size={30} color="#4A4A4A" />
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
