import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Login, PropsContext } from "./type";

const AuthContext = createContext<PropsContext>({
    email: "",
    setEmail: () => {},
    checkAuthentication: () => {},
    handleLogOut: () => {},
    isLoading: false,
});

export const AuthProvider = ({ children }: any) => {
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<Login>({ username: "", password: "" });

    const checkAuthentication = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://apirn-production.up.railway.app/login",
                { username: email, password: password }
            );

            const { token, usuario } = response.data;

            if (response.status === 200) {
                navigation.navigate("StackFeed");
                // console.log("token valido");
            } else {
                alert("Email ou senha inválidos.");
                console.log("Response", response.status);
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
        } catch (error) {
            console.error("Erro ao deslogar:", error);
        }
    };

    const storeData = async (email: string) => {
        try {
            const jsonValue = JSON.stringify(email);
            await AsyncStorage.setItem("@InfoUser", jsonValue);
        } catch (error) {
            console.log("Erro ao salvar dados!");
        }
    };

    const getData = async () => {
        setIsLoading(true);
        try {
            const value = await AsyncStorage.getItem("@InfoUser");
            if (value !== null) {
                const jsonValue = JSON.parse(value);
                console.log("Pegou os dados", jsonValue);
                navigation.navigate("StackFeed");
            }
        } catch (error) {
            console.log("Erro ao buscar dados!");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                checkAuthentication,
                handleLogOut,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
