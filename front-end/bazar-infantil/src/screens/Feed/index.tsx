import { View } from "react-native";
import React, { useEffect, useState } from "react";
import FeedRow from "../../components/FeedRow";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem } from "../../@types/apiTypes";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../Feed/type';

type FeedNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Feed'>;

export default function Feed() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [query, setQuery] = useState<string>("");
  const navigation = useNavigation<FeedNavigationProp>();

  useEffect(() => {
    LoadPostagens();
  }, []);

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("Não carregou o feed");
    }
  };

  const postagensFiltradas = query === ""
    ? postagens
    : postagens.filter((postagem) =>
        postagem.usuarioDTO.nome.toUpperCase().includes(query.toUpperCase())); 
    
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
      <FeedRow onRefreshing={LoadPostagens} listaPostagem={postagensFiltradas} isOnProfile={false} onAddToCart={adicionarAoCarrinho}/>
    </View>
  );
}
