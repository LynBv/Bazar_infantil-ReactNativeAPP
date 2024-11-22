import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";

const SearchBarFedd = () => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="busque por nome de usuario"
        value={query}
        onChangeText={handleQuery}
      />
      <IconM name="magnify" size={30} color="#000" />
    </View>
  );
};

export default SearchBarFedd;
