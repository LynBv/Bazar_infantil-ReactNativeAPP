import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import FeedRow from '../../components/FeedRow'
import postagens from "../../mock/PostagensData"
import { SearchBar } from 'react-native-elements'
import SearchBarFedd from '../../components/SearchBarFeed'
import {styles} from "./style"

export default function Feed() {
  return (
    <View style={styles.container}>
   
      <FeedRow listaPostagem={postagens}/>
    </View>
  )
}