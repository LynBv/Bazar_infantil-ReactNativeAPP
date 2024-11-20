import React, { useState } from "react";
import {
    Alert,
    Image,
    ImageBackground,
    Keyboard,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import BackgroundImage from "../../assets/logo/logoTranparente.png";
import { LogoImage } from "../../assets/logo/logo.png";
import { ButtonTypes } from "../../components/ButtonTypes";
import { TextInputField } from "../../components/TextImput";
import { styles } from "./style";
import { Text } from "react-native-elements";

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
                

            <Text style={styles.title}>Pequenos Tesouros</Text>
            
                <ImageBackground
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    source={BackgroundImage}
                >
                
                    <Image
                    style={styles.logoImage}
                    source={LogoImage}
                    alt="Logo "
                />
                    

                    <View style={styles.boxForms}>
                        

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
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};
