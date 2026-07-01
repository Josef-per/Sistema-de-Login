# Requisitos do Sistema

## Informações

**Projeto:** Sistema de Login  
**Versão:** 0.1.0  
**Status:** Em desenvolvimento

---

## Requisitos Funcionais

| ID | Requisito | Prioridade |
|----|-----------|------------|
| RF01 | Login | Alta |
| RF02 | Cadastro | Alta |
| RF03 | Recuperação de Senha | Média |
| RF04 | Dashboard | Alta |
| RF05 | Informações do Perfil | Média |
| RF06 | Logoff | Alta |
| RF07 | Alertas e Notificações | Alta |
| RF08 | Not Found | Baixa |

---

## Descrição dos Requisitos

### RF01 - Login

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

O sistema deve disponibilizar uma tela de login contendo os campos de e-mail e senha. Ambos os campos devem ser obrigatórios. O campo de senha deve utilizar o tipo password, impedindo a visualização dos caracteres enquanto o usuário realiza a digitação. O campo de e-mail deve aceitar apenas endereços em um formato válido. Além disso, a tela deve conter um link para o RF03 (Recuperação de Senha).

A tela deve possuir um botão responsável por enviar o formulário para que todas as validações necessárias sejam executadas.

O sistema deve informar quando ocorrer falha na autenticação, evitando revelar informações que possam comprometer a segurança da aplicação.

---

### RF02 - Cadastro

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

O sistema deve disponibilizar uma tela de cadastro contendo os campos Nome, E-mail, Senha e Confirmar Senha. Ao final do formulário deve existir um botão responsável por realizar o cadastro do usuário.

O sistema deve informar ao usuário quando existirem inconsistências nos dados informados, como senhas incompatíveis ou campos obrigatórios não preenchidos.

Enquanto um campo estiver em foco, o sistema poderá apresentar dicas de preenchimento ao usuário. No campo de senha deverão ser informadas as regras para criação de uma senha forte, contendo pelo menos uma letra maiúscula, um número e um caractere especial.

---

### RF03 - Recuperar Senha

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

No formulário para login presente no RF01 (Login), deverá ter um link com o texto "Esqueci minha senha" ou algum texto similar, contudo que continue sendo de fácil entendimento ao usuário e que evite ambiguidade em sua função.

Após o envio do formulário, o sistema deverá validar os dados informados. Independentemente da existência do e-mail informado, deverá ser apresentada uma mensagem semelhante a: "Se este endereço estiver cadastrado, enviaremos um e-mail com as instruções para recuperação da senha."

Os alertas devem ser feitos seguindo a forma descrita pelo RF07 (Alertas e Notificações)

---

### RF04 - Dashboard

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

Após realizar login ou cadastro, o usuário deverá ser redirecionado para a Dashboard. Nessa tela deverão ser apresentadas informações da conta, como nome do usuário, data de criação da conta e horário do último login realizado. A Dashboard também deverá disponibilizar acesso às funcionalidades descritas no RF05 (Perfil) e RF06 (Logoff).

---

### RF05 - Informações do Perfil

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

A tela deverá apresentar duas seções: uma destinada às informações do usuário, que poderão ser editadas, e outra contendo o histórico dos últimos sete logins realizados, exibindo a data e o horário de cada acesso.

Na primeira lista de informações pessoais, o sistema deverá permitir que o usuário edite suas informações pessoais. Antes de salvar as alterações, todas as validações descritas no RF02 deverão ser executadas novamente.

---

### RF06 - Logoff

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

Ao realizar o logoff, o sistema deverá encerrar a sessão do usuário, removendo todos os dados temporários utilizados durante a autenticação. Após o encerramento da sessão, o usuário deverá ser redirecionado novamente para a tela de Login.

---

### RF07 - Alertas e Notificações

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

Sempre que uma ação necessitar de retorno ao usuário, o sistema deverá apresentar uma notificação visual informando o resultado da operação. O conteúdo da notificação deverá variar conforme o contexto, podendo representar sucesso, erro, aviso ou informação.

A cor e seu conteúdo como ícones e texto, vai depender do contexto que está sendo chamado, podendo ser para erros, redirecionamentos, sucessos, sempre que for preciso notificar alguma ação ao usuário.

---

### RF08 - Not Found

| Data de Criação | Última Alteração | Versão |
|-----------------|------------------|--------|
| 01/07/2026      | 01/07/2026       | 1.0.0  |

#### Descrição

Caso algum erro de redirecionamento ocorra ou perda de informações aconteça, essa tela deve ser apresentada ao usuário, independente do momento que o erro ocorrer.

---
