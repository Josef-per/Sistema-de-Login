# Arquitetura do Sistema

## 1. Objetivo

Este documento descreve a arquitetura do sistema, apresentando sua estrutura, organização dos componentes, tecnologias utilizadas e o fluxo de funcionamento da aplicação. Seu objetivo é servir como referência para o desenvolvimento, manutenção e evolução do projeto.

---

## 2. Visão Geral

O sistema consiste em uma aplicação de autenticação de usuários, permitindo operações como cadastro, login, recuperação de senha e gerenciamento de sua própria conta.

Os dados serão armazenados temporariamente em uma lista em memória, simulando as operações de armazenamento, consulta, atualização e remoção realizadas por um banco de dados.

---

## 3. Tecnologias Utilizadas

## Front-end

| Tecnologia  | Finalidade              |
|-------------|-------------------------|
| React       | Cosntrução da interface |
| CSS         | Estilização             |
| JavaScript  | Lógica da aplicação     |

## Ferramentas

| Ferramenta | Finalidade    |
|------------|---------------|
| Git        | Versionamento |
| Babel      | Transpilador  |
| Esbuild    | Bundler       |

---

## 4. Arquitetura Adotada

O sistema utiliza uma arquitetura em camadas para aplicações Front-end, inspirada no padrão MVC, separando a interface do usuário, a lógica da aplicação e o gerenciamento dos dados em memória.

Essa arquitetura separa as responsabilidades da aplicação em três componentes principais:

- **View:** responsável pela interface com o usuário.
- **Controller:** responsável pelo processamento das ações do usuário e pela coordenação da lógica da aplicação.
- **Model:** responsável pela comunicação com a lista de dados.

---

## 5. Componentes da Arquitetura

### Cliente

Responsável pela interação do usuário com o sistema através do navegador.

#### Responsabilidades

- Exibir telas
- Capturar informações
- Enviar requisições

---

### Controller

Responsável por receber as ações do usuário, validar os dados e coordenar a comunicação entre a interface e o modelo de dados.

#### Responsabilidades

- Validar dados
- Processar informações
- Chamar os Models
- Retornar respostas

---

### Model

Camada responsável pelo acesso aos dados.

#### Responsabilidades

- Consultar os dados armazenados na lista
- Inserir registros
- Atualizar dados
- Remover informações

---

## 6. Fluxo da Aplicação

O funcionamento do sistema ocorre conforme o fluxo abaixo:

1. O usuário acessa a aplicação.
2. A interface apresenta as telas.
3. O usuário realiza uma ação na interface.
4. O Controller recebe os dados.
5. Os dados são validados pelo controller.
6. O Model acessa a lista de dados.
7. O Model retorna o resultado ao Controller.
8. O Controller processa a resposta.
9. A interface apresenta o resultado ao usuário.

---

## 7. Estrutura de Diretórios

```text
projeto/

│
|
├── docs/
│   ├── diagramas/
│   ├── requisitos.md
│   └── roadmap.md
│
├── public/
|   └──  index.html
│
├── src/
|   ├── assets/
|   | ├── icons/
│   | └── images/
|   |
|   ├── controllers/
│   ├── models/
|   ├── views/
│   ├── App.jsx
|   └── index.js
│
├── .gitignore
|
├── package.json
|
├── pnpm-lock.yaml
|
└── README.md

```

---

## 9. Considerações Finais

A arquitetura proposta organiza a aplicação em componentes independentes, promovendo melhor manutenção, reutilização de código e facilidade para futuras evoluções do sistema.
