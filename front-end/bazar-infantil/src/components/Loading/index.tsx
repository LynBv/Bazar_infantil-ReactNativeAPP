import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";

export const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={100} color="#96ceb4" />
        </View>
    );
};
