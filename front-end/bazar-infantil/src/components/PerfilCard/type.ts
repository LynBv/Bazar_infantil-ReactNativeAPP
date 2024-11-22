import { Postagem } from "../../@types/apiTypes";

export interface PropsPerfilCard{
  avatar: string;
  nomeUsuario: string;
  logout: () => void;
}

