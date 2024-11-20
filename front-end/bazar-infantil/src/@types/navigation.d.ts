export type PropsStack = {
    StackLogin: undefined,
    StackFeed: undefined,
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