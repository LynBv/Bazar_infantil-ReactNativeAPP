import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PropsContext } from "./type";

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

    const checkAuthentication = (email: string) => {
        setIsLoading(true);

        if (email === "") {
            setTimeout(() => {
                storeData(email);
                navigation.navigate("StackFeed");
                setIsLoading(false);
            }, 3000);
        }
    };

    const handleLogOut = () => {
        AsyncStorage.removeItem("@InfoUser");
        navigation.navigate("StackLogin");
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
