import React, { useState } from "react";
import {
    Alert,
    ImageBackground,
    Keyboard,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import BackgroundImage from "../../assets/varal1.jpg";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextImput";
import { styles } from "./style";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        Alert.alert("Botão para realizar login");
        console.log("Pegando informações", email, password);
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
                <ImageBackground
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    source={BackgroundImage}
                >
                    

                    <View style={styles.boxForms}>
                        <View style={{ marginTop: 50 }} />

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
                            propsBackgroundColor="#fe4a49"
                        />
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};
