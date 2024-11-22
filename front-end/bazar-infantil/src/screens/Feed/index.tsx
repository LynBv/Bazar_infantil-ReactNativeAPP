import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FeedRow from "../../components/FeedRow";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem } from "../../@types/apiTypes";

export default function Feed() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [isSearching, setIsSerching] = useState<boolean>(false);
  const [queryPostagens, setQueryPostagens] = useState<Postagem[]>([]);
  const [query, setQuery] = useState<string>("");

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("nao carregou o feed");
    }
  };

  const handleSearch = () => {
    let queryUpcase = query.toUpperCase();

    const newPostagem = postagens.filter((postagem) =>
      postagem.usuarioDTO.nome.toUpperCase().includes(queryUpcase)
    );

    setQueryPostagens(newPostagem);
  };

  useEffect(() => {
    LoadPostagens();
  }, []);

  useEffect(() => {
    setIsSerching(true);

    handleSearch();

    if (query === "") {
      setIsSerching(false);
    }
  }, [query]);

  const showPostagens = () => {
    return isSearching ? queryPostagens : postagens;
  };

  return (
    <View style={styles.container}>
      <SearchBarFedd inputValue={query} handleQuerry={setQuery} />
      <FeedRow onRefreshing={LoadPostagens} listaPostagem={showPostagens()} />
    </View>
  );
}
