import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { JWTtoken, PropsContext } from "./type";
import { ServiceGetInfoUsuario } from "../services/GetInfoUsuarios";
import { UsuarioDTO } from "../@types/apiTypes";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  checkAuthentication: () => {},
  handleLogOut: () => {},
  isLoading: false,
  usuario: { id: 0, nome: "", email: "", base64: "" },
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<UsuarioDTO>({
    id: 0,
    nome: "",
    email: "",
    base64: "",
  });

  const checkAuthentication = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
         //"https://apirn-production.up.railway.app/login",  
        // "http://192.168.0.12:8080/login",
        "http://192.168.0.195:8080/login",
        { username: email, password: password }
      );

      const authorization = response.headers["authorization"];
      const token = authorization.split(" ")[1];
      

      if (token) {
        await AsyncStorage.setItem("@userToken", token);
        const decoded: JWTtoken = jwtDecode(token);
        pegarDadosUsuario(decoded.id);
        
        navigation.navigate("StackFeed");
      } else {
        alert("Email ou senha inválidos.");
        //console.log("Response", response.status);
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      alert("Erro ao autenticar. Verifique seus dados.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("@userToken");
      await AsyncStorage.removeItem("@userData");
      navigation.navigate("StackLogin");
      //console.log("desloguei")
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  const storeData = async (email: string) => {
    try {
      const jsonValue = JSON.stringify(email);
      await AsyncStorage.setItem("@InfoUser", jsonValue);
    } catch (error) {
      console.error("Erro ao salvar dados!" + error);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("@InfoUser");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        //console.log("Pegou os dados", jsonValue);
        navigation.navigate("StackFeed");
      }
    } catch (error) {
      console.error("Erro ao buscar dados!" + error);
    }
    setIsLoading(false);
  };

  const pegarDadosUsuario = async (idUsuario: string) => {
    const response = await ServiceGetInfoUsuario(idUsuario);

    if (response && response.status === 200) {
     await setUsuario(response.data);

    } else {
      console.error("nao conseguiu salvar usuario");
    }
  };

  useEffect(() => {
    getData();
    setarUsuario();
  }, []);

  const setarUsuario = async () => {
    const token = await pegarToken();
    if (token) {
      const decoded: JWTtoken = jwtDecode(token);
      await pegarDadosUsuario(decoded.id.toString());
    }
  };

  const pegarToken = async () => {
    const value = await AsyncStorage.getItem("@userToken", (err, result) => {
      return result;
    });
    return value;
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        checkAuthentication,
        handleLogOut,
        isLoading,
        usuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
