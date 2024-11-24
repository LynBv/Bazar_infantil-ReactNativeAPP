import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FeedRow from "../../components/FeedRow";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem } from "../../@types/apiTypes";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Feed/type';

type FeedNavigationProp = StackNavigationProp<RootStackParamList, 'Feed'>;

export default function Feed() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [isSearching, setIsSerching] = useState<boolean>(false);
  const [queryPostagens, setQueryPostagens] = useState<Postagem[]>([]);
  const [query, setQuery] = useState<string>("");
  const navigation = useNavigation<FeedNavigationProp>();

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("Não carregou o feed");
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
  const adicionarAoCarrinho = (postagem: Postagem) => {
    navigation.navigate("Carrinho", { postagem });
  };

  return (
    <View style={styles.container}>
      <SearchBarFedd inputValue={query} handleQuerry={setQuery} />
      <FeedRow
        onRefreshing={LoadPostagens}
        listaPostagem={showPostagens()}
        onAddToCart={adicionarAoCarrinho}
      />
    </View>
  );
}
