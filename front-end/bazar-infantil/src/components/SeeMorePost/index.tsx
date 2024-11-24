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

  const categGenero = () => {
    if (postagem.postagem.categoriasGenero === "FEMININO") {
      return "Feminino";
    }
    if (postagem.postagem.categoriasGenero === "MASCULINO") {
      return "Masculino";
    }
    if (postagem.postagem.categoriasGenero === "UNISSEX") {
      return "Unissex";
    }
  }

  const categIdade = () => {
    if (postagem.postagem.categoriasIdade === "MESES0A3") {
      return "0 a 3 meses";
    }
    if (postagem.postagem.categoriasIdade === "MESES3A6") {
      return "3 a 6 meses";
    }
    if (postagem.postagem.categoriasIdade === "MESES6A9") {
      return "6 a 9 meses";
    }
    if (postagem.postagem.categoriasIdade === "MESES9A12") {
      return "9 a 12 meses";
    }
    if (postagem.postagem.categoriasIdade === "MESES12A18") {
      return "12 a 18 meses";
    }
    if (postagem.postagem.categoriasIdade === "ANO1") {
      return "1 ano";
    }
    if (postagem.postagem.categoriasIdade === "ANOS2") {
      return "2 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS4") {
      return "4 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS6") {
      return "6 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS8") {
      return "8 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS10") {
      return "10 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS12") {
      return "12 anos";
    }
    if (postagem.postagem.categoriasIdade === "ANOS14") {
      return "14 anos";
    }
    return "sem idade";
  };

  const preco = new Intl.NumberFormat("pt-bt", {style: "currency", currency: "BRL"});

  function addCarrinho() {
    navigation.navigate("StackCarrinho", { postagem: { postagem } });
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
              {categGenero()}
            </Text>
            <Text style={styles.postCateg}>
              {categIdade()}
            </Text>
            <Text style={styles.postData}>{postagem.postagem.dataCriacao}</Text>
          </View>
          <Text style={styles.postPreco}>{preco.format(postagem.postagem.preco)}</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonAdd} onPress={addCarrinho}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.shadow}></View>
    </>
  );
};
