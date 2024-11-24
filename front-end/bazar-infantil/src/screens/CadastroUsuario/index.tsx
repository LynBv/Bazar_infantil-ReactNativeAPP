import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { ButtonTypes } from "../../components/ButtonTypes";
import { CustomTextInput } from "../../components/CustomTextImput";
import { styles } from "./style";
import { Avatar } from "./type";

export default function CadastroUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState<Avatar>({
        id: 0,
        dados: "",
        tipo: "",
        nome: "",
    });
    const [avatars, setAvatars] = useState<Avatar[]>([]);
    const avatarImage = "data:image/png;base64,";

    const navigation = useNavigation();

    useEffect(() => {
        axios
            .get(
                "https://apirn-production.up.railway.app/avatar" 
                   // "http://192.168.0.12:8080/avatar"
            )
            .then((response) => {
                setAvatars(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar avatares:", JSON.stringify(error, null, 2));
                alert("Erro ao carregar avatares. Tente novamente.");
            });
    }, []);

    function handleCreateUser() {
        if (name && email && password !== "" && password === passwordConfirm) {
            const newUser = {
                nome: name,
                email: email,
                senha: password,
                confirmaSenha: password,
                avatar: selectedAvatar,
            };

            axios
                .post(
<<<<<<< HEAD
                    /* "https://apirn-production.up.railway.app/usuarios", */
                    "http://192.168.0.12:8080/usuarios",
=======
                    "http://192.168.0.107:8080/usuarios",
>>>>>>> d375824a07ff542d7a109f60a269387d84396395
                    newUser
                )
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
                                    source={{
                                        uri: `${avatarImage}${avatarUrl.dados}`,
                                    }}
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
