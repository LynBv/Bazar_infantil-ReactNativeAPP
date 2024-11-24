import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../Carrinho/CarrinhoStyle";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParamsProps } from "../Postagem/type";

// Exemplo de itens no carrinho
const initialItems = [
  { id: 3, nome: "Gorro", preco: 30 },
  { id: 4, nome: "Camiseta Infantil", preco: 50 },
  { id: 5, nome: "Calça Jeans", preco: 60 },
];

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(initialItems);
  const route = useRoute<RouteProp<ParamsProps, "postagem">>();
  const postagem = route.params?.postagem;

  const precoFormat = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const adicionarItem = () => {
    if (postagem) {
      setItensCarrinho((prevItens) => [
        ...prevItens,
        { id: postagem.id, nome: postagem.titulo, preco: postagem.preco },
      ]);
    }
  };

  useEffect(() => {
    adicionarItem();
  }, [postagem]);

  // Função para remover item do carrinho
  const removerItem = (id: number) => {
    setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* StatusBar customizada */}
      <StatusBar style="light" backgroundColor="#86a1db" />

      {/* Lista de itens do carrinho */}
      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <Text style={styles.itemPrice}>
              {precoFormat.format(item.preco)}
            </Text>

            {/* Botão para remover item do carrinho */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removerItem(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botão para limpar todo o carrinho */}
      <TouchableOpacity style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Limpar Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}
