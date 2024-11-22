import { View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { SeeMorePost } from '../../components/SeeMorePost'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ParamsProps } from './type'

export const Postagem = () => {
  const route = useRoute<RouteProp<ParamsProps, "postagem">>();
  const postagem = route.params?.postagem;

  return (
    <View style={styles.container}>
      <SeeMorePost postagem={postagem}/>
    </View>
  )
}