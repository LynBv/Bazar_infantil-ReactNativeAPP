import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { ButtonTypes } from "../../components/ButtonTypes";
import { CustomTextInput } from "../../components/CustomTextImput";
import { styles } from "./style";

// const avatarOptions = [
//     require("../../assets/avatar/avatar1.png"),
//     require("../../assets/avatar/avatar2.png"),
//     require("../../assets/avatar/avatar3.png"),
//     require("../../assets/avatar/avatar4.png"),
//     require("../../assets/avatar/avatar5.png"),
//     require("../../assets/avatar/avatar6.png"),
//     require("../../assets/avatar/avatar7.png"),
//     require("../../assets/avatar/avatar8.png"),
//     require("../../assets/avatar/avatar9.png"),
// ];

export default function CadastroUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
    const [avatars, setAvatars] = useState<string[]>([]);

    const navigation = useNavigation();

    useEffect(() => {
        axios
            .get("https://apirn-production.up.railway.app/avatar")
            .then((response) => {
                setAvatars(response.data); // Presume que response.data é uma lista de URLs de imagens
            })
            .catch((error) => {
                console.error("Erro ao buscar avatares:", error);
                alert("Erro ao carregar avatares. Tente novamente.");
            });
    }, []);

    function handleCreateUser() {
        if (name && email && password !== "" && password === passwordConfirm) {
            const newUser = {
                nome: name,
                email: email,
                senha: password,
                avatar: selectedAvatar,
            };
    
            axios
                .post("https://apirn-production.up.railway.app/usuarios", newUser)
                .then(() => {
                    alert("Usuário cadastrado com sucesso!");
                    navigation.navigate("StackLogin");
                })
                .catch((error) => {
                    console.error("Erro ao cadastrar usuário:", error);
                    alert("Erro ao cadastrar. Tente novamente.");
                });
        } else {
            alert("Algo deu errado. Verifique os campos e tente novamente.");
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.form}>
                <CustomTextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />
                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <CustomTextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <CustomTextInput
                    placeholder="Confirmar senha"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry
                />

                <Text style={styles.avatarTitle}>Escolha um Avatar:</Text>

                <View style={styles.avatarContainer}>
                    {avatars.length > 0 ? (
                        avatars.map((avatarUrl, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedAvatar(avatarUrl)}
                            >
                                <Image
                                    source={{ uri: avatarUrl }}
                                    style={[
                                        styles.avatarImage,
                                        selectedAvatar === avatarUrl &&
                                            styles.avatarSelected,
                                    ]}
                                />
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text>Carregando avatares...</Text>
                    )}
                </View>

                <ButtonTypes
                    title="Cadastrar"
                    handleFunction={handleCreateUser}
                    propsBackgroundColor="#96ceb4"
                />
            </View>
        </ScrollView>
    );
}
