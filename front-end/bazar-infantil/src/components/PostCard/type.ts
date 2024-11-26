import { Postagem } from "../../@types/apiTypes";


export interface PropsPostagem {
    postagem: Postagem;
    isOnProfile: boolean;
    setPostagens: (postagens : Postagem[]) => void;
    postagens: Postagem[];
  }
  
