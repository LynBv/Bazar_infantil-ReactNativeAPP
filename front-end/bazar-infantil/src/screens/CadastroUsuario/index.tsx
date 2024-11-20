import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { ButtonTypes } from "../../components/ButtonTypes";
import { CustomTextInput } from "../../components/CustomTextImput";
import { styles } from "./style";

const avatarOptions = [
    require("../../assets/avatar/avatar1.png"),
    require("../../assets/avatar/avatar2.png"),
    require("../../assets/avatar/avatar3.png"),
    require("../../assets/avatar/avatar4.png"),
    require("../../assets/avatar/avatar5.png"),
    require("../../assets/avatar/avatar6.png"),
    require("../../assets/avatar/avatar7.png"),
    require("../../assets/avatar/avatar8.png"),
    require("../../assets/avatar/avatar9.png"),
];

export default function CadastroUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);

    const navigation = useNavigation();

    function handleCreateUser() {
        if (name && email && password !== "" && password === passwordConfirm) {
            alert("Cadastro criado com sucesso");
            navigation.navigate("StackLogin");
        } else {
            alert("Algo deu errado.");
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
                    {avatarOptions.map((avatar, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedAvatar(avatar)}
                        >
                            <Image
                                source={avatar}
                                style={[
                                    styles.avatarImage,
                                    selectedAvatar === avatar &&
                                        styles.avatarSelected,
                                ]}
                            />
                        </TouchableOpacity>
                    ))}
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
