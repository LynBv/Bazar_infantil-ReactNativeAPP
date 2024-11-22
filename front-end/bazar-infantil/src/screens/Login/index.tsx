import React, { useState } from "react";
import {
    Image,
    Keyboard,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import LogoImage from "../../assets/logo/pequenos-tesouros-logo.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { Loading } from "../../components/Loading";
import { TextInputField } from "../../components/TextImputField";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export const Login = () => {
    const { email, setEmail, checkAuthentication, isLoading } = useAuth();
    const [password, setPassword] = useState<string>("");

    const navigation = useNavigation();

    const handleLogin = () => {
        if (!email || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        console.log(email + " e " + password)
        checkAuthentication(email, password);
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Pequenos Tesouros</Text>
                        <Text style={styles.subtitle}>
                            Roupinhas cheias de amor e novas aventuras!
                        </Text>

                        <Image
                            style={styles.logoImage}
                            source={LogoImage}
                            alt="Logo"
                        />

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
                            onPress={() =>
                                navigation.navigate("StackCadastroUsuario")
                            }
                        >
                            <Text style={styles.signupText}>
                                Ainda não tem cadastro?{" "}
                                <Text style={styles.link}>Clique aqui.</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </React.Fragment>
    );
};
