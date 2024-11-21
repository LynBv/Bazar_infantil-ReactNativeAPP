import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React from "react";

interface PropsButton {
    title: string | number;
    propsBackgroundColor?: string;
    handleFunction: () => void;
   

}

interface Props1 { //ou type
    title: string;
    title2: string;
}
interface Props2 {
    subTitle: string;
}

function tiposGenericos <T>(args: T){
    return args;
}


export const ButtonTypes = ({title, propsBackgroundColor, handleFunction}: PropsButton) => {

    

    return (
        <TouchableOpacity
        onPress={handleFunction}
        activeOpacity={0.2}
        style={[styles.styleButton, {
            backgroundColor: propsBackgroundColor ? propsBackgroundColor: "#000"
        }]}

>
        <Text style= {styles.text}>
        {title}
        </Text>

        {/* <Text>{subTitle}</Text> */}

        </TouchableOpacity>
    );
};
