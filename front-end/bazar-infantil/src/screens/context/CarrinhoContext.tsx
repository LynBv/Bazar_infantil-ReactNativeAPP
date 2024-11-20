import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipo do item do carrinho
type CarrinhoItem = {
  id: string;
  name: string;
  price: number;
};

// Tipo do contexto
type CarrinhoContextType = {
  carrinho: CarrinhoItem[];
  adicionarAoCarrinho: (item: CarrinhoItem) => void;
  removerDoCarrinho: (id: string) => void;
  limparCarrinho: () => void;
};

// Criação do contexto
const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

// Provider do contexto
export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

  // Carregar carrinho do AsyncStorage
  useEffect(() => {
    const carregarCarrinho = async () => {
      const carrinhoSalvo = await AsyncStorage.getItem('@carrinho');
      if (carrinhoSalvo) setCarrinho(JSON.parse(carrinhoSalvo));
    };
    carregarCarrinho();
  }, []);

  // Salvar carrinho no AsyncStorage
  useEffect(() => {
    AsyncStorage.setItem('@carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (item: CarrinhoItem) =>
    setCarrinho((prev) => [...prev, item]);

  const removerDoCarrinho = (id: string) =>
    setCarrinho((prev) => prev.filter((item) => item.id !== id));

  const limparCarrinho = () => setCarrinho([]);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook para usar o contexto
export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
