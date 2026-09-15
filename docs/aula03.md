# Aula 03 — Páginas e Roteamento no Next.js

## 1. Introdução

Nas aulas anteriores aprendemos:

* O que é o Next.js;
* A relação entre Next.js e React;
* Como criar um projeto;
* A estrutura básica de um projeto Next.js;
* O papel da pasta `app` ou `src/app`.

Agora vamos começar a construir diferentes páginas dentro da nossa aplicação.

Para isso, precisamos entender dois conceitos importantes:

> **Páginas e roteamento.**

---

# 2. O que é uma página?

Uma página é uma parte da aplicação que podemos acessar através de um endereço.

Por exemplo:

```text
/
```

pode representar a página inicial.

Enquanto:

```text
/sobre
```

pode representar uma página "Sobre".

E:

```text
/contacto
```

pode representar uma página de contacto.

Podemos imaginar uma aplicação assim:

```text
Meu site
│
├── /              → Página inicial
├── /sobre         → Página Sobre
├── /contacto      → Página Contacto
└── /servicos      → Página Serviços
```

Cada endereço representa uma **rota**.

---

# 3. O que é uma rota?

Uma rota é o caminho utilizado para chegar a uma determinada página ou recurso da aplicação.

Por exemplo:

```text
https://meusite.com/
```

A rota é:

```text
/
```

Já:

```text
https://meusite.com/sobre
```

tem a rota:

```text
/sobre
```

Outro exemplo:

```text
https://meusite.com/contacto
```

tem a rota:

```text
/contacto
```

Podemos pensar numa rota como um **endereço dentro da aplicação**.

---

# 4. O que é roteamento?

**Roteamento** é o mecanismo responsável por determinar o que deve ser apresentado quando acessamos determinado endereço.

Por exemplo:

```text
/sobre
   ↓
Página Sobre
```

ou:

```text
/produtos
   ↓
Página de Produtos
```

Em uma aplicação web podemos ter dezenas ou até centenas de rotas.

O sistema de roteamento organiza essas rotas.

---

# 5. Roteamento no Next.js

Uma das características importantes do Next.js é que o roteamento é baseado na estrutura de diretórios.

Quando utilizamos o **App Router**, as rotas são definidas principalmente através da pasta:

```text
app/
```

ou:

```text
src/app/
```

Isso significa que não precisamos criar manualmente um arquivo de configuração contendo todas as rotas.

A própria estrutura do projeto ajuda a definir os caminhos.

---

# 6. A primeira rota

Quando criamos um projeto Next.js com App Router, encontramos:

```text
src/
└── app/
    └── page.tsx
```

Esse arquivo representa a página inicial.

Portanto:

```text
src/app/page.tsx
        ↓
       /
```

Quando acessamos:

```text
http://localhost:3000/
```

o Next.js apresenta o conteúdo de:

```text
page.tsx
```

---

# 7. Criando uma segunda página

Agora queremos criar uma página chamada **Sobre**.

Podemos criar:

```text
src/
└── app/
    ├── page.tsx
    │
    └── sobre/
        └── page.tsx
```

Observe a estrutura:

```text
sobre/
└── page.tsx
```

A pasta:

```text
sobre
```

representa a rota:

```text
/sobre
```

Portanto:

```text
src/app/sobre/page.tsx
             ↓
          /sobre
```

---

# 8. Criando a página Sobre

Dentro de:

```text
src/app/sobre/page.tsx
```

podemos ter:

```tsx
export default function Sobre() {
  return (
    <main>
      <h1>Sobre nós</h1>
      <p>Esta é a página sobre.</p>
    </main>
  );
}
```

Agora podemos acessar:

```text
http://localhost:3000/sobre
```

E o Next.js apresentará essa página.

---

# 9. Criando várias páginas

Podemos continuar criando novas pastas.

Por exemplo:

```text
src/
└── app/
    ├── page.tsx
    │
    ├── sobre/
    │   └── page.tsx
    │
    ├── contacto/
    │   └── page.tsx
    │
    └── servicos/
        └── page.tsx
```

Temos:

```text
src/app/page.tsx
        ↓
       /

src/app/sobre/page.tsx
        ↓
      /sobre

src/app/contacto/page.tsx
        ↓
    /contacto

src/app/servicos/page.tsx
        ↓
     /servicos
```

Podemos perceber uma regra simples:

> **A estrutura de pastas representa a estrutura das URLs.**

---

# 10. Por que o arquivo se chama `page.tsx`?

No App Router, o arquivo:

```text
page.tsx
```

tem um significado especial.

Ele indica ao Next.js que naquele local existe uma **página que pode ser acessada através de uma rota**.

Por exemplo:

```text
app/
└── produtos/
    └── page.tsx
```

O Next.js entende:

```text
produtos/
└── page.tsx
       ↓
    /produtos
```

Por isso não podemos simplesmente criar:

```text
app/produtos/produtos.tsx
```

e esperar que automaticamente seja uma rota.

No App Router, utilizamos o arquivo especial:

```text
page.tsx
```

---

# 11. Rota e URL

É importante não confundir esses conceitos.

Uma **URL** pode ser:

```text
https://meusite.com/produtos
```

A rota é:

```text
/produtos
```

Podemos pensar:

```text
URL
│
├── domínio
│   └── meusite.com
│
└── rota
    └── /produtos
```

Durante o desenvolvimento local:

```text
http://localhost:3000/produtos
```

A rota continua sendo:

```text
/produtos
```

---

# 12. Navegação entre páginas

Depois de criar várias páginas, precisamos permitir que o utilizador navegue entre elas.

Por exemplo:

```text
Página inicial
      ↓
    Sobre
      ↓
   Contacto
```

No Next.js, existe um componente chamado:

```text
Link
```

Ele é utilizado para criar navegação entre páginas.

Exemplo:

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Página Inicial</h1>

      <Link href="/sobre">
        Sobre nós
      </Link>
    </main>
  );
}
```

Quando o utilizador clicar em:

```text
Sobre nós
```

será direcionado para:

```text
/sobre
```

---

# 13. Por que utilizar `Link`?

Podemos pensar em duas formas de criar links:

```html
<a href="/sobre">
  Sobre
</a>
```

e:

```tsx
<Link href="/sobre">
  Sobre
</Link>
```

No Next.js, para navegar entre páginas da própria aplicação, normalmente utilizamos:

```tsx
<Link />
```

Isso permite que o Next.js trate a navegação de maneira otimizada.

Já o elemento HTML:

```html
<a>
```

continua sendo importante e deve ser utilizado quando estamos trabalhando com links HTML tradicionais, especialmente para destinos externos.

---

# 14. Rotas aninhadas

As rotas também podem possuir níveis.

Imagine que temos:

```text
/produtos
```

e queremos uma página específica para cada produto:

```text
/produtos/iphone
```

Podemos organizar:

```text
src/
└── app/
    └── produtos/
        ├── page.tsx
        │
        └── iphone/
            └── page.tsx
```

Teremos:

```text
produtos/page.tsx
        ↓
    /produtos

produtos/iphone/page.tsx
        ↓
   /produtos/iphone
```

Isso é chamado de **roteamento aninhado**.

---

# 15. Exemplo de uma estrutura maior

Uma aplicação poderia ter:

```text
src/
└── app/
    ├── page.tsx
    │
    ├── sobre/
    │   └── page.tsx
    │
    ├── contacto/
    │   └── page.tsx
    │
    ├── produtos/
    │   ├── page.tsx
    │   │
    │   ├── eletronicos/
    │   │   └── page.tsx
    │   │
    │   └── roupas/
    │       └── page.tsx
    │
    └── blog/
        ├── page.tsx
        │
        └── artigos/
            └── page.tsx
```

Isso representa aproximadamente:

```text
/ 
/sobre
/contacto
/produtos
/produtos/eletronicos
/produtos/roupas
/blog
/blog/artigos
```

A estrutura de diretórios torna a organização das rotas bastante visual.

---

# 16. Rotas dinâmicas

Em aplicações reais, nem sempre sabemos antecipadamente o nome de cada rota.

Imagine uma loja virtual.

Temos produtos:

```text
iPhone
Samsung
Xiaomi
```

Poderíamos ter:

```text
/produtos/iphone
/produtos/samsung
/produtos/xiaomi
```

Seria impraticável criar manualmente uma pasta para cada produto.

É aqui que entram as **rotas dinâmicas**.

No Next.js podemos criar uma rota dinâmica utilizando colchetes:

```text
src/
└── app/
    └── produtos/
        └── [id]/
            └── page.tsx
```

O:

```text
[id]
```

representa uma parte variável da URL.

Assim:

```text
/produtos/1
/produtos/2
/produtos/3
```

podem utilizar a mesma estrutura.

Podemos imaginar:

```text
/produtos/[id]
          ↑
       variável
```

---

# 17. Exemplo de rota dinâmica

Podemos ter:

```text
src/app/produtos/[id]/page.tsx
```

E acessar:

```text
/produtos/10
```

Nesse caso:

```text
id = 10
```

Se acessarmos:

```text
/produtos/25
```

teremos:

```text
id = 25
```

O mesmo arquivo pode tratar diferentes valores.

---

# 18. Rota estática vs rota dinâmica

### Rota estática

```text
/sobre
```

Temos uma rota definida:

```text
app/sobre/page.tsx
```

### Rota dinâmica

```text
/produtos/10
/produtos/20
/produtos/30
```

Temos:

```text
app/produtos/[id]/page.tsx
```

A diferença principal é:

```text
Estática
↓
/sobre

Dinâmica
↓
/produtos/[id]
```

---

# 19. Uma aplicação começa a ganhar forma

Até agora temos:

```text
src/
└── app/
    ├── page.tsx
    ├── sobre/
    │   └── page.tsx
    ├── contacto/
    │   └── page.tsx
    └── produtos/
        ├── page.tsx
        └── [id]/
            └── page.tsx
```

Isso já nos permite construir uma aplicação com várias páginas.

Podemos visualizar:

```text
                    Aplicação
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
         /           /sobre      /contacto
          │
       /produtos
          │
          └── /produtos/[id]
```

---

# 20. Resumo da aula

Nesta aula aprendemos:

### Página

É uma interface que pode ser apresentada ao utilizador.

```text
page.tsx
```

representa uma página no App Router.

### Rota

É o caminho utilizado para acessar uma página.

```text
/sobre
```

### Roteamento

É o mecanismo que determina o que deve ser apresentado para cada rota.

### App Router

No Next.js, podemos definir rotas através da estrutura de:

```text
app/
```

ou:

```text
src/app/
```

### Regra principal

```text
app/
└── sobre/
    └── page.tsx

        ↓

     /sobre
```

### Rota dinâmica

```text
app/
└── produtos/
    └── [id]/
        └── page.tsx

        ↓

   /produtos/10
   /produtos/20
   /produtos/30
```

### Navegação

Para navegar entre páginas internas da aplicação, utilizamos:

```tsx
<Link href="/sobre">
  Sobre
</Link>
```

---

# 21. O que devemos memorizar?

Não precisamos decorar tudo nesta primeira abordagem.

O mais importante é entender esta relação:

```text
PASTA
  ↓
ROTA
  ↓
PÁGINA
```

Por exemplo:

```text
app/contacto/page.tsx
          ↓
       /contacto
          ↓
   Página de Contacto
```

E para uma rota dinâmica:

```text
app/produtos/[id]/page.tsx
             ↓
       /produtos/123
             ↓
     Página do produto
```

> **No App Router, a estrutura de diretórios ajuda a definir o sistema de roteamento da aplicação.**
