import { AxiosHeaderValue } from "axios";

export interface PropsContext {
    email: string;
    setEmail: (value: string) => void;
    checkAuthentication: (email: string, password: string) => void;
    handleLogOut: () => void;
    isLoading: boolean;
}

export interface Login {
    username: string,
    password: string
}

export interface tokenType{
    token: AxiosHeaderValue;
}