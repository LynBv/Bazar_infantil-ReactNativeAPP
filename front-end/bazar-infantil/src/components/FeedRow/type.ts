import { ImageSourcePropType } from "react-native";

export interface PropsPostagem {
  postagem: Postagem;
}

export interface Postagem {
  id: number;
  titulo: string;
  descricao: string;
  categoriasGenero: string;
  categoriasIdade: string;
  preco: number;
  dataCriacao: string;
  foto: Foto[];
  usuarioDTO: PropsUsuarioDTO;
}

export interface ArrayPostagem {
  listaPostagem: Postagem[];
}

export interface PropsRow{
  listaPostagem: Postagem[];
  onRefreshing: () => void;
}
export interface Foto {
  id: number;
  dados: string;
}

export interface PropsUsuarioDTO {
  id: number;
  nome: string;
  email: string;
  base64: string;
}
