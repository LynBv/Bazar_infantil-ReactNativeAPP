import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";
import { ArrayPostagem } from "../FeedRow/type";
import { PropsSeeMore } from "./type";
import { ButtonTypes } from "../ButtonTypes";
import { useNavigation } from "@react-navigation/native";

export const SeeMorePost = ({ postagem }: { postagem: PropsSeeMore }) => {

  const navigation = useNavigation();

  function addCarrinho(){
    //add Para o carrinho
  }

  function comprar(){
    //compra direta
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ownerInfo}>
          <Image
            source={postagem.postagem.fotoUsuario}
            style={styles.ownerAvatar}
          />
          <Text style={styles.ownerName}>{postagem.postagem.nomeUsuario}</Text>
        </View>
        <View style={styles.postInfo}>
          <Image
            source={postagem.postagem.fotoPostagem}
            style={styles.postPhoto}
          />
          <Text style={styles.postDescricao}>{postagem.postagem.conteudo}</Text>
          <Text style={styles.postData}>{postagem.postagem.dataPostagem}</Text>
          <Text style={styles.postPreco}>R$ {postagem.postagem.preco}</Text>
        </View>
        <View>
          <ButtonTypes title="Adicionar ao Carrinho" handleFunction={addCarrinho}/>
          <ButtonTypes title="Comprar" handleFunction={comprar}/>
        </View>
      </ScrollView>
      <View style={styles.shadow}></View>
    </>
  );
};
