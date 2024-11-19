import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '../../components/PostCard'

export default function Feed() {
  return (
    <View>
      <PostCard/>
      <PostCard/>
    </View>
  )
}