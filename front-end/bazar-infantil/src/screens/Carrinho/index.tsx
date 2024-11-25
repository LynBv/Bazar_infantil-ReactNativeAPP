import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { CarrinhoContext } from "../../components/context/CarrinhoContext";
import styles from "./styles";

export default function Carrinho() {
  const { itensCarrinho, removerItemCarrinho, limparCarrinho } = useContext(CarrinhoContext);
  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => total + item.preco, 0);
  };

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#86a1db" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Carrinho</Text>
      </View>
      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>{item.nome}</Text>
              <Text style={styles.itemPrice}>{formatarPreco(item.preco)}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removerItemCarrinho(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footerContainer}>
        {/* Valor total */}
        <Text style={styles.totalText}>
          Total: {formatarPreco(calcularTotal())}
        </Text>
        {/* Botão para limpar o carrinho */}
        <TouchableOpacity
          style={styles.clearButton}
          onPress={limparCarrinho}
        >
          <Text style={styles.clearButtonText}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
