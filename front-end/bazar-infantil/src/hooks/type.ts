export interface PropsContext {
    email: string;
    setEmail: (value: string) => void;
    checkAuthentication: (email: string, password: string) => void;
    handleLogOut: () => void;
    isLoading: boolean;
}
