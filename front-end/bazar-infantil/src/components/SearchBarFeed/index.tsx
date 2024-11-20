import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from "./style";
import IconM from '@expo/vector-icons/MaterialCommunityIcons';

const SearchBarFedd = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>
      <IconM name="magnify" size={30} color="#000" />
    </View>
  )
}

export default SearchBarFedd