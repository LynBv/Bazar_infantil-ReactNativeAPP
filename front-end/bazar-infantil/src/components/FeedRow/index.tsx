import { View, Text, FlatList } from "react-native";
import React from "react";
import { ArrayPostagem } from "./type";
import PostCard from "../PostCard";
import { styles } from "./style";
import SearchBarFedd from "../SearchBarFeed";

const FeedRow = ({ listaPostagem }: ArrayPostagem) => {
  return (
   <>
      <SearchBarFedd/>
      <FlatList
        data={listaPostagem}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <PostCard postagem={item} />
          </View>
        )}
      />
</>
  );
};

export default FeedRow;
