import axios, { AxiosError } from "axios";

export const ServiceGetPostagensFeed = async () => {
  try {
    const response = await axios.get("http://192.168.0.107:8080/postagem");
    return response;
  } catch (error)
   {
    if(axios.isAxiosError(error)){
      const axiosErro = error as AxiosError;
      console.error("Erro ao fazer requisicao  "+ axiosErro.stack +" " );
    }else{console.error("nao foi erro de axios: " + error);}
    
  }
};
