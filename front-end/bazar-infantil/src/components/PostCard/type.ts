import { Postagem } from "../../@types/apiTypes";


export interface PropsPostagem {
    postagem: Postagem;
    onAddToCart: (postagem: Postagem) => void;
  }
  
