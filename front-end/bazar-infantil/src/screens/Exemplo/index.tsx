import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import FeedRow from '../../components/FeedRow'
import postagens from "../../mock/PostagensData"
import { SearchBar } from 'react-native-elements'
import SearchBarFedd from '../../components/SearchBarFeed'
import {styles} from "./style"

export default function Exemplo() {
  return (
    <View style={styles.container}>
      <Text>EXEMPLO</Text>
    </View>
  )
}