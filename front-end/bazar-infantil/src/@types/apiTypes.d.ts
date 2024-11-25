export interface Postagem {
  nome: string;
  id: number;
  titulo: string;
  descricao: string;
  categoriasGenero: string;
  categoriasIdade: string;
  preco: number;
  dataCriacao: string;
  foto: Foto[];
  usuarioDTO: UsuarioDTO;
}

export interface ArrayPostagem {
  listaPostagem: Postagem[];
}

export interface Foto {
  id: number;
  dados: string;
}

export interface UsuarioDTO {
  id: number;
  nome: string;
  email: string;
  base64: string;
}
