import { ImageSourcePropType } from "react-native";

export interface PropsPostagem {
  id: number;
  nomeUsuario: string;
  conteudo: string;
  fotoUsuario: ImageSourcePropType;
  fotoPostagem: ImageSourcePropType;
  preco: number;
  dataPostagem: string;
}

export interface ArrayPostagem {
  listaPostagem: PropsPostagem[];
}
