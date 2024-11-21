import { PropsSeeMore } from "../components/SeeMorePost/type"

export type PropsStack = {
    StackLogin: undefined,
    StackFeed: undefined,
    StackPostagem: {postagem: PropsSeeMore},
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