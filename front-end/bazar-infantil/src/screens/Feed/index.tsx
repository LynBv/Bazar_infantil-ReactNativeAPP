import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'
import FeedRow from '../../components/FeedRow'
import postagens from "../../mock/PostagensData"

export default function Feed() {
  return (
    <View>
      <FeedRow listaPostagem={postagens}/>
    </View>
  )
}