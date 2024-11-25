import { View, Text, FlatList, RefreshControl } from "react-native";
import { useState } from "react";
import PostCard from "../PostCard";
import { styles } from "./style";
import { PropsRow } from "./type";
import React from 'react';

const FeedRow = ({ listaPostagem, onRefreshing, isOnProfile, setPostagens }: PropsRow) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const recarregar = async () => {
    setRefreshing(true);
    await onRefreshing();
    setRefreshing(false);
  };

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={async () => await recarregar()}
        />
      }
      style={{ width: "95%" }}
      data={listaPostagem.sort((a, b) => b.id - a.id)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <PostCard postagem={item}  isOnProfile={isOnProfile} setPostagens={setPostagens} postagens={listaPostagem}/>
        </View>
      )}
    />
  );
};

export default FeedRow;
