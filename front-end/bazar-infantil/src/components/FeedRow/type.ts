import { Postagem } from "../../@types/apiTypes";

export interface PropsRow{
  listaPostagem: Postagem[];
  onRefreshing: () => void;
  onAddToCart: (postagem: Postagem) => void;
}
