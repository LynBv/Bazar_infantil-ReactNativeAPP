import { Postagem } from "../../@types/apiTypes";

export interface PropsRow{
  listaPostagem: Postagem[];
  onRefreshing: () => void;
  isOnProfile: boolean;
  onAddToCart: (postagem: Postagem) => void;
  setPostagens: (postagens : Postagem[]) => void;
}
