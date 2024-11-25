import { ImageSourcePropType } from "react-native";
import { Postagem } from "../../@types/apiTypes";

export type RootStackParamList = {
    Feed: undefined;
    Carrinho: { postagem: Postagem };
    Perfil: undefined;
  };
  
