import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import React from "react";
import { ButtonTypes } from "../ButtonTypes";
import { useNavigation } from "@react-navigation/native";
import { PropsPostagem } from "../PostCard/type";

export const SeeMorePost = ({ postagem }: { postagem: PropsPostagem }) => {
  const avatarImage = postagem?.postagem.usuarioDTO?.base64
    ? "data:image/png;base64," + postagem.postagem.usuarioDTO.base64
    : null;
  const postImage = postagem?.postagem.foto[0]?.dados
    ? "data:image/png;base64," + postagem.postagem.foto[0].dados
    : null;

  const navigation = useNavigation();

  function addCarrinho() {
    navigation.navigate("StackCarrinho", { postagem: { postagem } });
  }

  function comprar() {
    //compra direta
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ownerInfo}>
          {avatarImage && (
            <Image source={{ uri: avatarImage }} style={styles.ownerAvatar} />
          )}
          <Text style={styles.ownerName}>
            {postagem.postagem.usuarioDTO.nome}
          </Text>
        </View>
        <View style={styles.postInfo}>
          <Text style={styles.postTitle}>{postagem.postagem.titulo}</Text>
          {postImage && (
            <Image source={{ uri: postImage }} style={styles.postPhoto} />
          )}
          <Text style={styles.postDescricao}>
            {postagem.postagem.descricao}
          </Text>
          <View style={styles.postSmallDetails}>
            <Text style={styles.postCateg}>
              {postagem.postagem.categoriasGenero}
            </Text>
            <Text style={styles.postCateg}>
              {postagem.postagem.categoriasIdade}
            </Text>
            <Text style={styles.postData}>{postagem.postagem.dataCriacao}</Text>
          </View>
          <Text style={styles.postPreco}>R$ {postagem.postagem.preco}</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonAdd} onPress={addCarrinho}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          {/* <ButtonTypes title="Comprar" handleFunction={comprar} /> */}
        </View>
      </ScrollView>
      <View style={styles.shadow}></View>
    </>
  );
};
