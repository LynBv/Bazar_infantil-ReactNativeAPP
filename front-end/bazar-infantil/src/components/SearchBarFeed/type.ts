import { Postagem } from "../../@types/apiTypes";

export interface PropsSearchBar{
    inputValue: string;
    handleQuerry: (value: string) => void;
}