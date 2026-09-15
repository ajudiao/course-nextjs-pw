# Aula 02 — Criando um Projeto Next.js e Estrutura de Pastas

## 1. Criando o primeiro projeto Next.js

Na aula anterior aprendemos que o **Next.js é um framework baseado em React**.

Agora vamos criar o nosso primeiro projeto.

Para trabalhar com Next.js, precisamos ter o **Node.js** instalado no computador.

Podemos verificar se o Node.js está instalado com:

```bash
node -v
```

Também podemos verificar o npm:

```bash
npm -v
```

Se os comandos apresentarem as versões instaladas, podemos continuar.

---

## 2. Criando o projeto

O Next.js disponibiliza uma ferramenta chamada **create-next-app** para facilitar a criação de novos projetos.

Podemos criar um projeto executando:

```bash
npx create-next-app@latest meu-projeto
```

O comando significa:

```text
npx
 ↓
Executa um pacote sem precisarmos instalá-lo globalmente

create-next-app
 ↓
Ferramenta oficial para criar aplicações Next.js

@latest
 ↓
Utiliza a versão mais recente disponível

meu-projeto
 ↓
Nome da aplicação
```

Depois de executar o comando, o Next.js fará algumas perguntas para configurar o projeto.

---

## 3. Configurações iniciais

Durante a criação do projeto, podemos encontrar perguntas como:

```text
Would you like to use TypeScript?
Would you like to use ESLint?
Would you like to use Tailwind CSS?
Would you like your code inside a `src/` directory?
Would you like to use App Router?
Would you like to customize the import alias?
```

Para um projeto de estudo, podemos utilizar uma configuração como:

```text
TypeScript              → Yes
ESLint                  → Yes
Tailwind CSS            → Yes
src/ directory          → No
App Router              → Yes
Import alias            → Yes
```

As opções podem variar dependendo da versão do Next.js.

O importante é entender que essas perguntas servem para definir como o projeto será configurado.

---

# 4. Entrando no projeto

Depois da criação:

```bash
cd meu-projeto
```

Agora estamos dentro da pasta da aplicação.

Podemos iniciar o servidor de desenvolvimento com:

```bash
npm run dev
```

Normalmente, o Next.js disponibiliza a aplicação em:

```text
http://localhost:3000
```

Podemos abrir esse endereço no navegador para visualizar a aplicação.

---

# 5. Estrutura inicial do projeto

Depois de criar o projeto, teremos uma estrutura semelhante a esta:

```text
meu-projeto/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│
├── node_modules/
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

A estrutura pode variar dependendo das opções escolhidas durante a criação e da versão do Next.js.

Agora vamos entender o papel de cada parte.

---

# 6. A pasta `app`

```text
app/
```

Esta é uma das pastas mais importantes quando utilizamos o **App Router**.

É dentro dela que normalmente ficam elementos relacionados à estrutura da aplicação, como:

* Páginas;
* Layouts;
* Estilos globais;
* Loading;
* Tratamento de erros;
* Rotas.

Por exemplo:

```text
app/
├── page.tsx
└── layout.tsx
```

A pasta `app` representa o coração da aplicação quando estamos utilizando o App Router.

---

# 7. O arquivo `page.tsx`

Dentro da pasta `app` encontramos:

```text
app/
└── page.tsx
```

Esse arquivo representa a página principal da aplicação.

Quando acessamos:

```text
http://localhost:3000
```

o conteúdo de:

```text
app/page.tsx
```

é utilizado para apresentar essa página.

Podemos pensar:

```text
app/page.tsx
      ↓
   página "/"
```

Mais tarde veremos como criar outras páginas.

---

# 8. O arquivo `layout.tsx`

Também encontramos:

```text
app/layout.tsx
```

O `layout.tsx` representa uma estrutura que pode ser compartilhada pelas páginas.

Por exemplo, podemos ter:

```text
┌─────────────────────────┐
│         Navbar          │
├─────────────────────────┤
│                         │
│       Conteúdo          │
│                         │
├─────────────────────────┤
│         Footer          │
└─────────────────────────┘
```

A Navbar e o Footer podem fazer parte de um layout compartilhado.

Assim, não precisamos repetir a mesma estrutura em todas as páginas.

---

# 9. O arquivo `globals.css`

Dentro de `app` também podemos encontrar:

```text
app/globals.css
```

Este arquivo contém estilos CSS globais da aplicação.

"Global" significa que esses estilos podem ser aplicados em diferentes partes da aplicação.

Por exemplo:

```css
body {
  margin: 0;
}
```

Podemos utilizar esse arquivo para estilos que devem afetar a aplicação de forma geral.

---

# 10. A pasta `public`

Outra pasta importante é:

```text
public/
```

Ela é utilizada para armazenar arquivos estáticos.

Por exemplo:

```text
public/
├── logo.png
├── banner.jpg
└── favicon.ico
```

Podemos colocar aqui:

* Imagens;
* Ícones;
* Fontes;
* Arquivos estáticos;
* Outros recursos que precisam ser disponibilizados diretamente.

Por exemplo, se tivermos:

```text
public/logo.png
```

podemos referenciar esse arquivo através de:

```text
/logo.png
```

---

# 11. A pasta `node_modules`

Durante a instalação do projeto será criada:

```text
node_modules/
```

Essa pasta contém as dependências utilizadas pelo projeto.

Por exemplo, o Next.js depende de vários pacotes para funcionar.

Esses pacotes são instalados dentro de `node_modules`.

Normalmente **não devemos editar essa pasta manualmente**.

Também não precisamos enviá-la para o GitHub.

É por isso que normalmente ela aparece no:

```text
.gitignore
```

---

# 12. O arquivo `package.json`

Um dos arquivos mais importantes de qualquer projeto JavaScript/TypeScript é:

```text
package.json
```

Ele contém informações sobre o projeto e suas dependências.

Por exemplo:

```json
{
  "name": "meu-projeto",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

Também encontramos as dependências utilizadas pela aplicação.

Por exemplo:

```json
"dependencies": {
  "next": "...",
  "react": "...",
  "react-dom": "..."
}
```

O `package.json` funciona como uma espécie de **documento de configuração do projeto Node.js**.

---

# 13. O arquivo `package-lock.json`

Também podemos encontrar:

```text
package-lock.json
```

Ele registra informações detalhadas sobre as versões das dependências instaladas.

Isso ajuda a garantir que a instalação das dependências seja consistente entre diferentes ambientes.

Normalmente não precisamos editar esse arquivo manualmente.

---

# 14. O arquivo `next.config.ts`

Podemos encontrar:

```text
next.config.ts
```

Esse arquivo permite configurar determinados comportamentos do Next.js.

Por exemplo, podemos utilizar configurações relacionadas a:

* Imagens;
* Domínios;
* Redirecionamentos;
* Configurações específicas do framework.

No início não precisamos alterar esse arquivo.

Vamos utilizá-lo quando surgir uma necessidade específica.

---

# 15. O arquivo `tsconfig.json`

Se escolhermos TypeScript, teremos:

```text
tsconfig.json
```

Esse arquivo contém configurações relacionadas ao TypeScript.

Por exemplo, ele define como o TypeScript deve interpretar e verificar o código do projeto.

No início também não precisamos modificar esse arquivo constantemente.

---

# 16. O arquivo `.gitignore`

O arquivo:

```text
.gitignore
```

informa ao Git quais arquivos e pastas não devem ser enviados para o repositório.

Por exemplo:

```text
node_modules/
.next/
```

Essas pastas podem ser recriadas quando instalamos ou executamos o projeto.

---

# 17. O arquivo `README.md`

O:

```text
README.md
```

é um documento de apresentação do projeto.

Podemos utilizar o README para explicar:

* O que é o projeto;
* Como instalar;
* Como executar;
* Tecnologias utilizadas;
* Funcionalidades;
* Outras informações importantes.

Por exemplo:

```markdown
# Meu Projeto

Projeto desenvolvido com Next.js.

## Instalação

npm install

## Executar

npm run dev
```

---

# 18. Visão geral da estrutura

Podemos resumir a estrutura inicial assim:

```text
meu-projeto/
│
├── app/                 → estrutura principal da aplicação
│   ├── page.tsx        → página principal
│   ├── layout.tsx      → layout compartilhado
│   └── globals.css     → estilos globais
│
├── public/             → arquivos estáticos
│
├── node_modules/       → dependências instaladas
│
├── package.json        → configuração e dependências
├── package-lock.json   → versões das dependências
├── next.config.ts      → configuração do Next.js
├── tsconfig.json       → configuração do TypeScript
├── eslint.config.mjs   → configuração do ESLint
├── .gitignore          → arquivos ignorados pelo Git
└── README.md           → documentação do projeto
```

---

# 19. Uma forma simples de memorizar

No início, podemos pensar no projeto desta maneira:

```text
app/
   ↓
Onde construímos a aplicação

public/
   ↓
Onde colocamos arquivos públicos

package.json
   ↓
Informações e dependências do projeto

node_modules/
   ↓
Dependências instaladas

next.config.ts
   ↓
Configurações do Next.js

tsconfig.json
   ↓
Configurações do TypeScript

.gitignore
   ↓
O que o Git deve ignorar

README.md
   ↓
Documentação do projeto
```

---

# 20. Conclusão

Nesta aula aprendemos a criar um projeto Next.js e conhecemos a estrutura inicial que encontramos depois da criação.

Os elementos mais importantes para guardar neste momento são:

* `app/` → estrutura principal da aplicação;
* `page.tsx` → representa uma página;
* `layout.tsx` → estrutura compartilhada;
* `globals.css` → estilos globais;
* `public/` → arquivos estáticos;
* `package.json` → informações, scripts e dependências;
* `node_modules/` → dependências instaladas;
* `next.config.ts` → configurações do Next.js;
* `tsconfig.json` → configurações do TypeScript;
* `.gitignore` → arquivos ignorados pelo Git;
* `README.md` → documentação do projeto.

### Próxima aula

Na próxima aula podemos começar a estudar um dos conceitos fundamentais do Next.js:

**Aula 03 — Rotas e páginas no Next.js**
