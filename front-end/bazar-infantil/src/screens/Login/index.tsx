import React, { useState } from "react";
import {
    Alert,
    Image,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";
import LogoImage from "../../assets/logo/logoTranparente.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextImputField";
import { styles } from "./style";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === "teste@teste.com" && password === "123456") {
            navigation.navigate("StackFeed");
        } else {
            Alert.alert("Erro", "Email ou senha inválidos");
        }
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Pequenos Tesouros</Text>
                <Text style={styles.subtitle}>
                    Roupinhas cheias de amor e novas aventuras!
                </Text>

                <Image style={styles.logoImage} source={LogoImage} alt="Logo" />

                <TextInputField
                    placeHolder="Digite seu email"
                    valueInput={email}
                    hadleFunctionInput={handleEmail}
                    typeIcon="person"
                />

                <TextInputField
                    placeHolder="Digite sua senha"
                    valueInput={password}
                    hadleFunctionInput={handlePassword}
                    typeInput={true}
                    typeIcon="password"
                />

                <ButtonTypes
                    title="Login"
                    handleFunction={handleLogin}
                    propsBackgroundColor="#96ceb4"
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("StackCadastroUsuario")}
                >
                    <Text style={styles.signupText}>
                        Ainda não tem cadastro?{" "}
                        <Text style={styles.link}>Clique aqui.</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};
