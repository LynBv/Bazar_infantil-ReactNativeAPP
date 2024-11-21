import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./style";

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    autoCapitalize = "none",
    keyboardType = "default",
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                placeholderTextColor="#999"
            />
        </View>
    );
};
