import React, { createContext, useState, ReactNode } from "react";

interface Item {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
}
interface CarrinhoContextType {
  itensCarrinho: Item[];
  adicionarAoCarrinho: (item: Item) => void;
  removerItemCarrinho: (id: string) => void;
  limparCarrinho: () => void;
}
export const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);
export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState<Item[]>([]);
  const adicionarAoCarrinho = (item: Item) => {
    const existeNoCarrinho = itensCarrinho.some((carrinhoItem) => carrinhoItem.id === item.id);

    if (existeNoCarrinho) {
     // console.log(`Item ${item.nome} já está no carrinho.`);
      return; 
    }
    setItensCarrinho((prev) => [...prev, item]);
   // console.log(`Item ${item.nome} adicionado ao carrinho.`);
  };
  const removerItemCarrinho = (id: string) => {
    setItensCarrinho((prev) => prev.filter((item) => item.id !== id));
  };
  const limparCarrinho = () => {
    setItensCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider value={{ itensCarrinho, adicionarAoCarrinho, removerItemCarrinho, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
