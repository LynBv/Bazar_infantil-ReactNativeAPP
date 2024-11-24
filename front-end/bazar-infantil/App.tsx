import React from "react";
import { StatusBar } from "expo-status-bar";
import { CarrinhoProvider } from "./src/components/context/CarrinhoContext";
import { Routers } from "./src/routes";

export default function App() {
    return (
        <CarrinhoProvider>
            <StatusBar style="light" backgroundColor="#191414" />
            <Routers />
        </CarrinhoProvider>
    );
}
