import { ImageSourcePropType } from "react-native";

export interface PropsSeeMore {
    postagem: {
      nomeUsuario: string;
      conteudo: string;
      fotoUsuario: ImageSourcePropType;
      fotoPostagem: ImageSourcePropType;
      preco: number;
      dataPostagem: string;
    };
}