import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import React, { useContext } from "react";
import { ButtonTypes } from "../ButtonTypes";
import { useNavigation } from "@react-navigation/native";
import { CarrinhoContext } from "../../components/context/CarrinhoContext";
import { PropsPostagem } from "../PostCard/type";

export const SeeMorePost = ({ postagem }: PropsPostagem) => {
  const avatarImage = "data:image/png;base64," + postagem.usuarioDTO.base64;
  const postImage = "data:image/png;base64," + postagem.foto[0].dados ;

  const navigation = useNavigation();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const handleAddToCart = () => {
    const itemCarrinho = {
      id: postagem.id.toString(),
      nome: postagem.titulo,
      preco: postagem.preco,
      imagem: postImage,
    };

    //console.log("Adicionando item ao carrinho:", itemCarrinho);

    adicionarAoCarrinho(itemCarrinho);
  };

  const categGenero = () => {
    if (postagem.categoriasGenero === "FEMININO") {
      return "Feminino";
    }
    if (postagem.categoriasGenero === "MASCULINO") {
      return "Masculino";
    }
    if (postagem.categoriasGenero === "UNISSEX") {
      return "Unissex";
    }
  }

  const categIdade = () => {
    if (postagem.categoriasIdade === "MESES0A3") {
      return "0 a 3 meses";
    }
    if (postagem.categoriasIdade === "MESES3A6") {
      return "3 a 6 meses";
    }
    if (postagem.categoriasIdade === "MESES6A9") {
      return "6 a 9 meses";
    }
    if (postagem.categoriasIdade === "MESES9A12") {
      return "9 a 12 meses";
    }
    if (postagem.categoriasIdade === "MESES12A18") {
      return "12 a 18 meses";
    }
    if (postagem.categoriasIdade === "ANO1") {
      return "1 ano";
    }
    if (postagem.categoriasIdade === "ANOS2") {
      return "2 anos";
    }
    if (postagem.categoriasIdade === "ANOS4") {
      return "4 anos";
    }
    if (postagem.categoriasIdade === "ANOS6") {
      return "6 anos";
    }
    if (postagem.categoriasIdade === "ANOS8") {
      return "8 anos";
    }
    if (postagem.categoriasIdade === "ANOS10") {
      return "10 anos";
    }
    if (postagem.categoriasIdade === "ANOS12") {
      return "12 anos";
    }
    if (postagem.categoriasIdade === "ANOS14") {
      return "14 anos";
    }
    return "sem idade";
  };

  const preco = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"});

  function addCarrinho() {
    adicionarAoCarrinho({
      id: postagem.id.toString(),
      nome: postagem.titulo || postagem.nome || "Nome não informado",
      preco: postagem.preco,
      imagem: postImage,
    });
    navigation.navigate("StackCarrinho");
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.ownerInfo}>
          {avatarImage && (
            <Image source={{ uri: avatarImage }} style={{height: 50, width: 50, borderRadius: 50, marginLeft: 15,}}/>
          )}
          <Text style={styles.ownerName}>
            {postagem.usuarioDTO.nome}
          </Text>
        </View>
        <View style={styles.postInfo}>
          <Text style={styles.postTitle}>{postagem.titulo}</Text>
          {postImage && (
            <Image source={{ uri: postImage }} 
            
            style={{height: 230, width:230, borderRadius: 25, marginTop: 20, alignSelf: "center", borderWidth: 1, borderColor:"#7956a1"}} />
          )}
          <Text style={styles.postDescricao}>
            {postagem.descricao}
          </Text>
          <View style={styles.postSmallDetails}>
            <Text style={styles.postCateg}>
              {categGenero()}
            </Text>
            <Text style={styles.postCateg}>
              {categIdade()}
            </Text>
            
          </View>
          <Text style={styles.postData}>Data da Postagem: {postagem.dataCriacao}</Text>
          <Text style={styles.postPreco}>{preco.format(postagem.preco)}</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonAdd} onPress={addCarrinho}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </>
  );
}
