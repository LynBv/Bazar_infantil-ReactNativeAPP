import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { PropsSearchBar } from "./type";

const SearchBarFedd = ({ handleQuerry, inputValue }: PropsSearchBar) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="busque por nome de usuario"
        value={inputValue}
        onChangeText={(t) => handleQuerry(t)}
      />
      <IconM name="magnify" size={30} color="#000" />
    </View>
  );
};

export default SearchBarFedd;
