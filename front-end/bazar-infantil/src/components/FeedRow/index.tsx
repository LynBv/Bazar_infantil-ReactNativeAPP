import { View, Text, FlatList } from "react-native";
import React from "react";
import PostCard from "../PostCard";
import { styles } from "./style";
import SearchBarFedd from "../SearchBarFeed";
import { ArrayPostagem} from "./type";

const FeedRow = ({ listaPostagem }: ArrayPostagem) => {
  return (
      <FlatList
      style={{ width: "95%" }}
        data={listaPostagem}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <PostCard postagem={item} />
          </View>
        )}
      />
  );
};

export default FeedRow;
