import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FeedRow from "../../components/FeedRow";
import SearchBarFedd from "../../components/SearchBarFeed";
import { styles } from "./style";
import { ServiceGetPostagensFeed } from "../../services/GetPostagensFeed";
import { Postagem} from "../../components/FeedRow/type";

export default function Feed() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensFeed();

    if (response && response.status === 200) {
      setPostagens(response.data);
      console.log("setei postagens")
    } else {
     console.error("nao carregou o feed")
    }
  };

  useEffect(() => {
    LoadPostagens();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBarFedd />
      <FeedRow onRefreshing={LoadPostagens} listaPostagem={postagens} />
    </View>
  );
}
