import { View } from "react-native";
import React, { useEffect, useState } from "react";
import PerfilCard from "../../components/PerfilCard";
import FeedRow from "../../components/FeedRow";
import { styles } from "./style";
import { Postagem } from "../../@types/apiTypes";
import { ServiceGetPostagensPerfil } from "../../services/GetPostagensPerfil";

export default function Perfil() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    LoadPostagens();
    console.log("use effect do perfil")
  }, []);

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensPerfil("");

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("nao carregou o Perfil");
    }
  };

  return (
    <View style={styles.container}>
      <PerfilCard />
      <FeedRow listaPostagem={postagens} onRefreshing={LoadPostagens}/>
    </View>
  );
}
