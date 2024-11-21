import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import FeedRow from "../../components/FeedRow";
import postagens from "../../mock/PostagensData";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem} from "../../components/FeedRow/type";

export default function Feed() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const LoadPostagens = async () => {
    setIsLoading(true);
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
      console.log("passou")
    } else {
     console.error("nao carregou o feed")
    }
    setIsLoading(false);
  };

  useEffect(() => {
    LoadPostagens();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBarFedd />
     {/*  <TouchableOpacity style={{backgroundColor: "gray", height: 50, width: 100}} onPress={LoadPostagens}><Text>Carregar Postagens</Text></TouchableOpacity> */}
      <FeedRow listaPostagem={postagens} />
    </View>
  );
}
