import { PropsPostagem } from "../components/FeedRow/type"

export type PropsStack = {
    StackLogin: undefined,
    StackCadastroUsuario: undefined,
    StackFeed: undefined,
    StackPostagem: {postagem: PropsPostagem},
    StackCarrinho: {postagem: PropsPostagem},
  }
  
  export type PropsTabs = {
    TabsFeed: undefined,
    TabsCriarPostagem: undefined,
    TabsCarrinho: undefined,
  }
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends PropsStack {}
      interface RootParamList extends PropsTabs {}
    }
  }