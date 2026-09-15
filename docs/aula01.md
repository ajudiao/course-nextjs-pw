# Aula 01 — Introdução ao Next.js

## 1. O que é Next.js?

**Next.js** é um framework para desenvolvimento de aplicações web baseado em **React**.

De forma simples:

> React ajuda-nos a construir interfaces.
> Next.js fornece uma estrutura mais completa para construir aplicações web usando React.

Por isso, quando trabalhamos com Next.js, continuamos a utilizar os conceitos do React, como:

* Componentes
* Props
* Estado
* Hooks
* Eventos
* JSX/TSX

A diferença é que o Next.js acrescenta várias funcionalidades e ferramentas que facilitam a construção de aplicações completas.

---

## 2. Por que surgiu o Next.js?

O React é excelente para criar interfaces, mas uma aplicação real normalmente precisa de muito mais do que apenas componentes visuais.

Por exemplo, uma aplicação pode precisar de:

* Várias páginas;
* Navegação entre páginas;
* SEO;
* Carregamento rápido;
* Comunicação com APIs;
* Autenticação;
* Renderização no servidor;
* Otimização de imagens;
* Organização do projeto;
* Diferentes formas de carregar os dados.

O Next.js foi criado para facilitar o desenvolvimento desse tipo de aplicação.

Em vez de termos de configurar várias ferramentas separadamente, o Next.js fornece muitas dessas funcionalidades dentro do próprio framework.

---

## 3. React vs Next.js

É importante entender esta diferença desde o início.

### React

O React é uma **biblioteca JavaScript para construção de interfaces de usuário**.

Com React, podemos criar componentes como:

```text
Navbar
Button
Card
LoginForm
Product
User
```

E combinar esses componentes para construir uma aplicação.

### Next.js

O Next.js utiliza React como base, mas oferece uma estrutura mais completa para desenvolver aplicações web.

Podemos pensar assim:

```text
React
   ↓
Construção da interface

Next.js
   ↓
React + ferramentas e funcionalidades para aplicações web
```

Portanto:

> **Next.js não substitui o React. Ele utiliza React.**

---

## 4. O que podemos criar com Next.js?

Next.js pode ser utilizado para criar diferentes tipos de aplicações web.

Por exemplo:

* Sites institucionais;
* Portfólios;
* Blogs;
* Lojas virtuais;
* Sistemas de gestão;
* Dashboards;
* Plataformas educacionais;
* Redes sociais;
* Sistemas administrativos;
* Aplicações SaaS;
* APIs e aplicações full stack.

Isso faz com que Next.js seja bastante utilizado tanto para projetos pequenos quanto para aplicações maiores.

---

## 5. Next.js é apenas para Front-end?

Não necessariamente.

Uma das características interessantes do Next.js é que ele permite desenvolver aplicações que possuem tanto a parte visual quanto funcionalidades relacionadas ao servidor.

Podemos ter:

```text
Frontend
   ↓
Interface que o utilizador vê

Backend
   ↓
Regras, processamento e acesso a dados
```

O Next.js permite trabalhar com esses dois lados dentro do mesmo projeto.

Isso não significa que devemos obrigatoriamente utilizar Next.js como backend. Podemos, por exemplo, ter:

```text
Next.js
   ↓
Frontend

NestJS / Express
   ↓
Backend

PostgreSQL
   ↓
Base de dados
```

Ou podemos utilizar recursos do próprio Next.js para determinadas funcionalidades do lado do servidor.

---

## 6. Por que aprender Next.js depois de React?

Aprender React antes de Next.js ajuda bastante.

Isso acontece porque Next.js utiliza muitos conceitos que já existem no React.

Por exemplo:

```text
React
 ├── Componentes
 ├── Props
 ├── Estado
 ├── Hooks
 └── JSX

Next.js
 └── utiliza esses conceitos
```

Por isso, aprender Next.js não significa começar novamente do zero.

A ideia é pegar o conhecimento de React e aprender como utilizá-lo dentro de uma estrutura mais completa.

---

## 7. O que torna o Next.js interessante?

O Next.js procura resolver problemas comuns que aparecem durante o desenvolvimento de aplicações web.

Entre eles estão:

### Performance

A aplicação pode utilizar diferentes estratégias para entregar conteúdo de forma eficiente.

### SEO

O Next.js possui recursos que ajudam aplicações a serem melhor compreendidas e indexadas pelos motores de busca.

### Renderização

Uma aplicação pode utilizar diferentes formas de renderização dependendo da necessidade.

### Roteamento

A navegação entre diferentes páginas da aplicação é integrada ao framework.

### Backend

É possível implementar determinadas funcionalidades do lado do servidor utilizando o próprio Next.js.

### Otimização

O framework possui recursos para ajudar na otimização de elementos como imagens e carregamento de conteúdo.

---

## 8. Next.js é um framework

Uma diferença importante é entender o termo **framework**.

Uma biblioteca normalmente fornece ferramentas que podemos utilizar conforme a nossa necessidade.

Um framework, por outro lado, oferece uma estrutura mais definida para desenvolver uma aplicação.

Podemos imaginar:

```text
Biblioteca
   ↓
"Use estas ferramentas como quiser."

Framework
   ↓
"Vamos construir a aplicação seguindo esta estrutura."
```

Por isso, o Next.js ajuda a definir uma maneira organizada de construir aplicações React.

---

## 9. O que vamos aprender neste curso?

Ao longo das próximas aulas, vamos avançar gradualmente.

Primeiro vamos compreender os conceitos fundamentais do Next.js.

Depois vamos estudar assuntos como:

* Criação de projetos;
* Estrutura de uma aplicação;
* Páginas e navegação;
* Componentes;
* Layouts;
* Server Components;
* Client Components;
* Renderização;
* Busca de dados;
* Formulários;
* APIs;
* Autenticação;
* Integração com bases de dados;
* Deploy.

A ideia é não decorar funcionalidades isoladas, mas entender **por que elas existem e quando utilizá-las**.

---

## 10. Resumo da aula

Nesta primeira aula, devemos guardar principalmente estas ideias:

1. **Next.js é um framework baseado em React.**
2. **React continua sendo utilizado dentro do Next.js.**
3. N
