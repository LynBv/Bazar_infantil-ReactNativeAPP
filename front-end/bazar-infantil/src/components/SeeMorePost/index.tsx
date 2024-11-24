import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import React, { useContext } from "react";
import { ButtonTypes } from "../ButtonTypes";
import { useNavigation } from "@react-navigation/native";
import { CarrinhoContext } from "../../components/context/CarrinhoContext";
import { PropsPostagem } from "../PostCard/type";

export const SeeMorePost = ({ postagem }: PropsPostagem) => {
  const avatarImage = "data:image/png;base64," + postagem.usuarioDTO.base64;
  const postImage = "data:image/png;base64," + postagem.foto[0].dados;

  const navigation = useNavigation();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const handleAddToCart = () => {
    const itemCarrinho = {
      id: postagem.id.toString(),
      nome: postagem.titulo,
      preco: postagem.preco,
      imagem: postImage,
    };

    console.log("Adicionando item ao carrinho:", itemCarrinho);

    adicionarAoCarrinho(itemCarrinho);
  };

  function addCarrinho() {
    adicionarAoCarrinho({
      id: postagem.id.toString(),
      nome: postagem.titulo || postagem.nome || "Nome não informado",
      preco: postagem.preco,
      imagem: postImage,
    });
    navigation.navigate("StackCarrinho");
  }

  function comprar() {
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ownerInfo}>
          <Image source={{ uri: avatarImage }} style={styles.ownerAvatar} />
          <Text style={styles.ownerName}>{postagem.usuarioDTO.nome}</Text>
        </View>
        <View style={styles.postInfo}>
          <Text style={styles.postTitle}>{postagem.titulo}</Text>
          <Image source={{ uri: postImage }} style={styles.postPhoto} />
          <Text style={styles.postDescricao}>{postagem.descricao}</Text>
          <View style={styles.postSmallDetails}>
            <Text style={styles.postCateg}>{postagem.categoriasGenero}</Text>
            <Text style={styles.postCateg}>{postagem.categoriasIdade}</Text>
            <Text style={styles.postData}>{postagem.dataCriacao}</Text>
          </View>
          <Text style={styles.postPreco}>R$ {postagem.preco}</Text>
        </View>
        <View>
          <ButtonTypes
            title="Adicionar ao Carrinho"
            handleFunction={addCarrinho}
          />
          <ButtonTypes title="Comprar" handleFunction={comprar} />
        </View>
      </ScrollView>
      <View style={styles.shadow}></View>
    </>
  );
};
