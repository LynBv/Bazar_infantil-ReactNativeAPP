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
  foto: PropsFoto[];
  usuarioDTO: PropsUsuarioDTO;
}

export interface ArrayPostagem {
  listaPostagem: Postagem[];
}

export interface PropsFoto {
  id: number;
  dados: string;
}

export interface PropsUsuarioDTO {
  id: number;
  nome: string;
  email: string;
  base64: string;
}
