import axios, { AxiosError } from "axios";

export const DeletePostagemUsuario = async (idUsuario: string) => {
  try {
    const response = await axios.delete(
       /*  `http://192.168.0.12:8080/postagem/${idUsuario}` */ 
       /* `http://apirn-production.up.railway.app/postagem/${idUsuario}`  */
      `http://192.168.0.195:8080/postagem/${idUsuario}`
    );
    return response;
  } catch (error)
   {
    if(axios.isAxiosError(error)){
      const axiosErro = error as AxiosError;
      console.error("Erro ao fazer requisicao  "+ axiosErro.stack +" " );
    }else{console.error("nao foi erro de axios: " + error);}
    
  }
};