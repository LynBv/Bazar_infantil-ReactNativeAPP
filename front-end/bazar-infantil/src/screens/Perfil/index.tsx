import { View } from "react-native";
import React, { useEffect, useState } from "react";
import PerfilCard from "../../components/PerfilCard";
import FeedRow from "../../components/FeedRow";
import { styles } from "./style";
import { Postagem } from "../../@types/apiTypes";
import { ServiceGetPostagensPerfil } from "../../services/GetPostagensPerfil";
import { useAuth } from "../../hooks/useAuth";
import LogoutModal from "../../components/LogoutModal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Feed/type";

export default function Perfil() {
  type FeedNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Perfil'>;
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const { usuario, handleLogOut } = useAuth();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigation = useNavigation<FeedNavigationProp>();

  useEffect(() => {
    LoadPostagens();
  }, []);

  const LoadPostagens = async () => {
    const response = await ServiceGetPostagensPerfil(usuario.id.toString());

    if (response && response.status === 200) {
      setPostagens(response.data);
    } else {
      console.error("nao carregou o perfil");
    }
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const adicionarAoCarrinho = (postagem: Postagem) => {
    navigation.navigate("Carrinho", { postagem });
  };

  return (
    <View style={styles.container}>
      <PerfilCard
        handleModal={handleModal}
        avatar={usuario.base64}
        nomeUsuario={usuario.nome}
      />
      <FeedRow
        onAddToCart={adicionarAoCarrinho}
        listaPostagem={postagens}
        onRefreshing={LoadPostagens}
        isOnProfile={true}
      />
    
        {openModal && (
          <LogoutModal
            openModal={openModal}
            handleLogout={handleLogOut}
            handleModal={handleModal}
          />
        )}

    </View>
  );
}
