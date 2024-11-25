# Bazar Infantil - Pequenos Tesouros  
Trabalho final da disciplina React Native - Grupo 2  

## Integrantes  
- **Flávia Xerfan**: Tela de Login e Cadastro  
- **Elyn Virginio**: Feed e Perfil  
- **Christian Avellar**: Página de Criar Postagem  
- **Gabriel Macedo**: Carrinho  
- **Davi Soares**: Detalhes da Postagem  

## Descrição do Projeto  
O **Bazar Infantil - Pequenos Tesouros** é um aplicativo desenvolvido em React Native com TypeScript que serve como um bazar de roupas infantis usadas.  
Nosso objetivo é proporcionar acesso a roupas mais acessíveis para quem precisa, incentivando o reuso e a sustentabilidade.  

## Funcionalidades Principais  
- **Cadastro e Login**: Usuários podem criar contas ou acessar suas contas existentes para utilizar o aplicativo.  
- **Feed de Postagens**: Exibe as postagens de roupas disponíveis para venda.  
- **Criar Postagem**: Permite aos usuários publicarem suas roupas infantis para o bazar.  
- **Carrinho**: Adiciona itens desejados para facilitar a compra.  
- **Detalhes da Postagem**: Exibe informações detalhadas sobre cada roupa publicada.  
- **Perfil do Usuário**: Centraliza informações e permite apagar postagens e fazer logout.  

## Tecnologias Utilizadas  
- **Front-end**: React Native com TypeScript  
- **Back-end**: API desenvolvida por Davi Soares, com ajustes realizados por Davi Soares e Elyn Virginio  

## Configuração do Projeto  

### Configuração dos Endpoints  
Para rodar o aplicativo, será necessário configurar os endpoints no código para o IP da máquina em que o back-end está sendo executado.  
Os locais que precisam ser atualizados:  
- **Arquivos em `services`**  
- **Funções em `useAuth`**  
- **Criar Usuário**  
- **Criar Postagem**  

Substitua os IPs pelo IP do servidor do back-end local.  

### Instalação e Execução  
1. Clone o repositório:  
   ```bash  
   git clone https://github.com/LynBv/bazar-infantil.git  
