# Projeto ToDo List com React

## Descrição

Este projeto é uma aplicação web de lista de tarefas (ToDo List) desenvolvida utilizando a biblioteca React. A aplicação permite criar diferentes listas de tarefas, cada uma associada a uma categoria específica, como "Trabalho", "Pessoal", "Para Fazer", e "Outros".

Cada lista de tarefas é representada por um card, apresentando um título, uma cor de fundo distinta e uma área para adicionar novas tarefas. As tarefas são exibidas em uma lista abaixo do formulário de adição, e cada tarefa pode ser removida individualmente.

## Tecnologias Utilizadas

- **React**: A biblioteca JavaScript para construção de interfaces de usuário, proporcionando uma estrutura eficiente para o desenvolvimento de componentes reutilizáveis.

- **CSS**: Utilizado para estilizar a aplicação e proporcionar uma aparência visual agradável.

## Funcionalidades

1. **Adição de Tarefas**: Cada card possui um formulário que permite adicionar novas tarefas associadas a essa lista específica.

2. **Remoção de Tarefas**: Cada tarefa exibida pode ser removida individualmente ao clicar no botão "X".

3. **Listas Distintas**: Cada card representa uma lista de tarefas distinta, mantendo suas próprias tarefas independentes das outras listas.

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/todo-list-react.git
cd todo-list-react
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm start
```

A aplicação estará acessível no navegador no endereço [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **src/components**: Contém os componentes da aplicação, como `Cards`, `TodoForm`, e `TodoList`.
- **src/App.js**: Componente principal da aplicação que renderiza o componente `Cards`.
- **src/App.css**: Estilo global da aplicação.
- **public**: Contém o arquivo HTML principal (`public/index.html`).

# Contribuições

Contribuições para melhorias e correções são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/todo-list-react/issues) ou enviar um [pull request](https://github.com/seu-usuario/todo-list-react/pulls).

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

--- 
