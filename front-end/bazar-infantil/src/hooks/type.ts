export interface PropsContext {
    email: string;
    setEmail: (value: string) => void;
    checkAuthentication: (email: string) => void;
    handleLogOut: () => void;
    isLoading: boolean;
}
