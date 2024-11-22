import { View } from "react-native";
import React, { useEffect, useState } from "react";
import FeedRow from "../../components/FeedRow";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem } from "../../@types/apiTypes";

export default function Feed() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    LoadPostagens();
  }, []);

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("nao carregou o feed");
    }
  };

  const postagensFiltradas = query === ""
    ? postagens
    : postagens.filter((postagem) =>
        postagem.usuarioDTO.nome.toUpperCase().includes(query.toUpperCase())); 

  return (
    <View style={styles.container}>
      <SearchBarFedd inputValue={query} handleQuerry={setQuery} />
      <FeedRow onRefreshing={LoadPostagens} listaPostagem={postagensFiltradas} />
    </View>
  );
}
