import Icon from "@expo/vector-icons/Feather";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import React from "react";

export const TextInputField = ({
    placeHolder,
    typeInput,
    valueInput,
    hadleFunctionInput,
    typeIcon,
}: PropsInput) => {
    
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <View style={styles.boxInput}>
            <TextInput
                onChangeText={hadleFunctionInput}
                style={styles.input}
                placeholder={placeHolder}
                placeholderTextColor="#00000080"
                secureTextEntry={
                    typeIcon === "password" ? !viewPassword : typeInput
                }
                value={valueInput}
            />

            <View style={styles.boxIcon}>
                {typeIcon === "person" && (
                    <Icon name="user" size={24} color="#00000080" />
                )}

                {typeIcon === "password" && (
                    <TouchableOpacity
                        onPress={() => setViewPassword(!viewPassword)}
                    >
                        {viewPassword ? (
                            <Icon name="eye" size={24} color="#00000080" />
                        ) : (
                            <Icon name="eye-off" size={24} color="#00000080" />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
