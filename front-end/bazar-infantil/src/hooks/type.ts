import { UsuarioDTO } from "../@types/apiTypes";
import { Avatar } from "../screens/CadastroUsuario/type";

export interface PropsContext {
    email: string;
    setEmail: (value: string) => void;
    checkAuthentication: (email: string, password: string) => void;
    handleLogOut: () => void;
    isLoading: boolean;
    usuario: UsuarioDTO;

}

export interface JWTtoken{
    sub: string,
    id: string,
    exp: 1732479516
}
