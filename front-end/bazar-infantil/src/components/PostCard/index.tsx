// PostCard.tsx
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Snackbar } from "react-native-paper";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { PropsPostagem } from "./type";
import { CarrinhoContext } from "../../components/context/CarrinhoContext";

const PostCard = ({ postagem }: PropsPostagem) => {
  const avatarImage = "data:image/png;base64," + postagem.usuarioDTO.base64;
  const postImage = "data:image/png;base64," + postagem.foto[0].dados;

  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const navigation = useNavigation();

  const handleAddToCart = () => {
    const itemCarrinho = {
      id: postagem.id.toString(),
      nome: postagem.titulo,
      preco: postagem.preco,
      imagem: "data:image/png;base64," + postagem.foto[0].dados,
    };
  
    adicionarAoCarrinho(itemCarrinho);
    setSnackbarVisible(true);
  };
  

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
        <Text style={[styles.titulo, styles.estiloTexto]}>
          {postagem.titulo}
        </Text>
      </View>

      <View style={styles.infoCompra}>
        <View style={styles.precoCard}>
          <Text style={styles.preco}>{`R$${postagem.preco}`}</Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <IconM name="cart-arrow-down" size={45} color="#96CEB4" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.more}
        onPress={() => navigation.navigate("StackPostagem", { postagem })}
      >
        <Text>VER MAIS DETALHES</Text>
        <IconM name="chevron-down" size={30} color="#4A4A4A" />
      </TouchableOpacity>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Item adicionado ao carrinho!
      </Snackbar>
    </View>
  );
};

export default PostCard;
