# Aula 04 — Rotas Dinâmicas Aninhadas, Captura de Segmentos e Página Não Encontrada

## 1. Rotas dinâmicas aninhadas

Uma rota dinâmica é útil quando uma parte da URL pode mudar.

Por exemplo:

```text
/produtos/1
/produtos/2
/produtos/3
```

Podemos representar essa parte variável através de:

```text
app/
└── produtos/
    └── [id]/
        └── page.tsx
```

O `[id]` representa o valor que será recebido pela rota.

Mas podemos ter situações em que precisamos de **mais de um nível de informação**.

Por exemplo:

```text
/produtos/eletronicos/telemoveis
```

Aqui temos uma rota com vários níveis.

---

# 2. O que significa uma rota aninhada?

Uma rota aninhada é uma rota que está dentro de outra rota.

Por exemplo:

```text
app/
└── produtos/
    └── eletronicos/
        └── page.tsx
```

Representa:

```text
/produtos/eletronicos
```

Podemos continuar adicionando níveis:

```text
app/
└── produtos/
    └── eletronicos/
        └── telemoveis/
            └── page.tsx
```

Agora temos:

```text
/produtos/eletronicos/telemoveis
```

Cada pasta representa um segmento da URL.

```text
produtos
   ↓
eletronicos
   ↓
telemoveis
```

Resultado:

```text
/produtos/eletronicos/telemoveis
```

---

# 3. Rotas dinâmicas aninhadas

Agora podemos combinar rotas aninhadas com segmentos dinâmicos.

Imagine uma loja onde temos categorias e produtos:

```text
/produtos/eletronicos/10
/produtos/eletronicos/20
/produtos/roupas/30
```

Podemos criar:

```text
app/
└── produtos/
    └── [categoria]/
        └── [id]/
            └── page.tsx
```

Temos dois segmentos dinâmicos:

```text
[categoria]
[id]
```

Assim:

```text
/produtos/eletronicos/10
```

terá:

```text
categoria = eletronicos
id = 10
```

E:

```text
/produtos/roupas/30
```

terá:

```text
categoria = roupas
id = 30
```

A mesma página pode trabalhar com diferentes valores.

---

# 4. Por que utilizar rotas dinâmicas aninhadas?

Elas são úteis quando a estrutura da informação possui uma relação de hierarquia.

Por exemplo, em um site de notícias:

```text
/noticias/angola/politica
/noticias/angola/desporto
/noticias/portugal/politica
```

Podemos representar essa estrutura:

```text
app/
└── noticias/
    └── [pais]/
        └── [categoria]/
            └── page.tsx
```

Temos:

```text
noticias
   ↓
pais
   ↓
categoria
```

A URL acompanha essa hierarquia.

---

# 5. Outro exemplo: documentação

Imagine uma plataforma de documentação:

```text
/docs/javascript/variaveis
/docs/javascript/funcoes
/docs/react/componentes
/docs/react/hooks
```

Podemos ter:

```text
app/
└── docs/
    └── [tecnologia]/
        └── [assunto]/
            └── page.tsx
```

Assim:

```text
/docs/react/hooks
```

resultaria em:

```text
tecnologia = react
assunto = hooks
```

Isso permite construir estruturas de navegação mais organizadas.

---

# 6. Capturar todos os segmentos

Agora imagine uma situação diferente.

Temos uma aplicação de documentação e queremos aceitar URLs como:

```text
/docs
/docs/javascript
/docs/javascript/variaveis
/docs/javascript/funcoes
/docs/javascript/arrays/metodos
/docs/react/hooks/use-state
```

Aqui temos um problema.

Não sabemos quantos níveis existirão depois de `/docs`.

Poderíamos criar:

```text
[tecnologia]
[assunto]
[subassunto]
```

Mas isso não resolveria quando tivéssemos:

```text
/docs/javascript/arrays/metodos/map
```

Precisamos de uma maneira de dizer ao Next.js:

> "Capture todos os segmentos que aparecerem depois deste ponto."

Para isso existem os **Catch-all Segments**.

---

# 7. Catch-all Segment

Um segmento que captura todos os segmentos seguintes é criado utilizando:

```text
[...slug]
```

Observe os três pontos:

```text
...
```

Exemplo:

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

Agora essa rota pode capturar:

```text
/docs/javascript
/docs/javascript/variaveis
/docs/javascript/arrays/metodos
/docs/react/hooks/use-state
```

Tudo que aparecer depois de:

```text
/docs/
```

será capturado pelo `[...slug]`.

---

# 8. Por que usar `[...slug]`?

O objetivo principal é trabalhar com uma quantidade **variável de segmentos**.

Imagine um sistema de documentação.

Podemos ter:

```text
/docs/html
/docs/html/tags
/docs/html/tags/forms
/docs/html/tags/forms/input
```

Não sabemos antecipadamente quantos níveis existirão.

Em vez de criar várias pastas, podemos utilizar:

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

O Next.js consegue capturar todos esses segmentos.

---

# 9. Como os segmentos são capturados?

Suponha que temos:

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

E acessamos:

```text
/docs/javascript/react
```

Os segmentos capturados serão:

```text
["javascript", "react"]
```

Se acessarmos:

```text
/docs/javascript/react/hooks
```

teremos:

```text
["javascript", "react", "hooks"]
```

Ou seja, o valor capturado é um **array de strings**.

Podemos imaginar:

```text
/docs/javascript/react/hooks
        │          │      │
        └──────────┴──────┘
                 ↓
["javascript", "react", "hooks"]
```

---

# 10. Acessando o valor no componente

Podemos receber os parâmetros da rota na página:

```tsx
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Documentação</h1>

      <p>{slug.join(" / ")}</p>
    </main>
  );
}
```

Se acessarmos:

```text
/docs/javascript/react/hooks
```

teremos:

```text
javascript / react / hooks
```

O ponto principal é perceber que:

```text
slug
```

é um array.

---

# 11. Por que `slug` é um array?

Porque podemos ter uma quantidade diferente de segmentos.

Por exemplo:

```text
/docs/javascript
```

resulta em:

```text
["javascript"]
```

Enquanto:

```text
/docs/javascript/react/hooks
```

resulta em:

```text
["javascript", "react", "hooks"]
```

E:

```text
/docs/javascript/react/hooks/use-state
```

resulta em:

```text
["javascript", "react", "hooks", "use-state"]
```

Por isso não seria adequado guardar o valor como uma simples string.

Precisamos de um array:

```text
string[]
```

---

# 12. Optional Catch-all Segment

Existe ainda uma variação do Catch-all Segment:

```text
[[...slug]]
```

A diferença está nos **dois pares de colchetes**.

### Catch-all

```text
[...slug]
```

Precisa de pelo menos um segmento.

### Optional Catch-all

```text
[[...slug]]
```

Pode funcionar mesmo quando não existe nenhum segmento.

---

# 13. Diferença entre `[...slug]` e `[[...slug]]`

Com:

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

a rota:

```text
/docs/javascript
```

funciona.

Mas:

```text
/docs
```

não corresponde a esse segmento dinâmico.

Já com:

```text
app/
└── docs/
    └── [[...slug]]/
        └── page.tsx
```

podemos atender tanto:

```text
/docs
```

quanto:

```text
/docs/javascript
/docs/javascript/react
/docs/javascript/react/hooks
```

Por isso chamamos de **Optional Catch-all**.

---

# 14. Comparação

| Estrutura          | Exemplo                     | Comportamento                              |
| ------------------ | --------------------------- | ------------------------------------------ |
| `[id]`             | `/produtos/10`              | Captura um segmento                        |
| `[categoria]/[id]` | `/produtos/roupas/10`       | Captura dois segmentos                     |
| `[...slug]`        | `/docs/js/react/hooks`      | Captura vários segmentos                   |
| `[[...slug]]`      | `/docs` ou `/docs/js/react` | Captura vários segmentos, inclusive nenhum |

---

# 15. Página não encontrada

Em uma aplicação real, o utilizador pode acessar uma rota que não existe.

Por exemplo:

```text
/produtos
```

existe.

Mas o utilizador acessa:

```text
/produtos/abcxyz
```

e esse recurso pode não existir.

Precisamos apresentar uma página informando que algo não foi encontrado.

No Next.js podemos criar um arquivo especial chamado:

```text
not-found.tsx
```

---

# 16. Criando uma página 404 global

Podemos criar:

```text
app/
├── not-found.tsx
├── layout.tsx
└── page.tsx
```

O arquivo:

```text
app/not-found.tsx
```

pode ser utilizado para apresentar uma página personalizada quando uma página ou recurso não é encontrado.

Exemplo:

```tsx
export default function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>

      <p>
        A página que você procura não existe.
      </p>
    </main>
  );
}
```

Podemos criar uma interface mais amigável:

```text
┌─────────────────────────────┐
│                             │
│            404              │
│                             │
│    Página não encontrada    │
│                             │
│  A página não existe ou     │
│  foi removida.              │
│                             │
│       Voltar ao início      │
│                             │
└─────────────────────────────┘
```

---

# 17. Página não encontrada em uma rota específica

Também podemos colocar `not-found.tsx` dentro de uma determinada parte da aplicação.

Por exemplo:

```text
app/
└── produtos/
    ├── page.tsx
    ├── not-found.tsx
    └── [id]/
        └── page.tsx
```

Nesse caso, podemos utilizar essa página de não encontrado dentro do contexto de produtos.

Isso é especialmente útil quando queremos apresentar uma mensagem específica.

Por exemplo:

```text
Produto não encontrado
```

em vez de:

```text
Página não encontrada
```

---

# 18. Forçando uma página a ser considerada não encontrada

Existem situações em que a rota existe, mas o **recurso solicitado não existe**.

Imagine:

```text
/produtos/123
```

A rota:

```text
app/produtos/[id]/page.tsx
```

existe.

Porém, ao consultar a base de dados, descobrimos que o produto `123` não existe.

Nesse caso, podemos utilizar:

```tsx
notFound()
```

O Next.js pode então apresentar a página `not-found.tsx` correspondente.

Exemplo:

```tsx
import { notFound } from "next/navigation";

export default async function Produto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const produto = await buscarProduto(id);

  if (!produto) {
    notFound();
  }

  return (
    <main>
      <h1>{produto.nome}</h1>
    </main>
  );
}
```

A ideia é:

```text
Usuário
   ↓
/produtos/123
   ↓
Next.js encontra a rota
   ↓
Busca o produto
   ↓
Produto existe?
   ├── Sim → apresenta produto
   │
   └── Não → notFound()
                    ↓
              not-found.tsx
```

---

# 19. Exemplo completo de estrutura

Podemos combinar esses conceitos em uma aplicação:

```text
app/
│
├── page.tsx
├── not-found.tsx
│
├── produtos/
│   ├── page.tsx
│   │
│   └── [categoria]/
│       └── [id]/
│           ├── page.tsx
│           └── not-found.tsx
│
└── docs/
    └── [...slug]/
        └── page.tsx
```

Aqui temos:

```text
/                              → Página inicial

/produtos                      → Lista de produtos

/produtos/roupas/10            → Produto 10 da categoria roupas

/produtos/eletronicos/25       → Produto 25 da categoria eletrônicos

/docs/javascript               → Documentação

/docs/javascript/react         → Documentação

/docs/javascript/react/hooks   → Documentação
```

E podemos tratar recursos inexistentes através de:

```text
not-found.tsx
```

---

# 20. Resumo

## Rotas dinâmicas aninhadas

Permitem representar estruturas hierárquicas:

```text
app/
└── produtos/
    └── [categoria]/
        └── [id]/
            └── page.tsx
```

Representando:

```text
/produtos/roupas/10
```

---

## Catch-all Segment

Utilizamos:

```text
[...slug]
```

quando precisamos capturar **um ou vários segmentos**.

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

Pode capturar:

```text
/docs/javascript
/docs/javascript/react
/docs/javascript/react/hooks
```

O valor recebido é um array:

```text
["javascript", "react", "hooks"]
```

---

## Optional Catch-all Segment

Utilizamos:

```text
[[...slug]]
```

quando queremos permitir também a ausência de segmentos.

Pode atender:

```text
/docs
/docs/javascript
/docs/javascript/react
/docs/javascript/react/hooks
```

---

## Página não encontrada

Criamos:

```text
app/not-found.tsx
```

para personalizar a página de recurso não encontrado.

Também podemos criar um `not-found.tsx` dentro de uma determinada parte da aplicação.

Quando um recurso não existe, podemos utilizar:

```tsx
notFound();
```

para indicar ao Next.js que aquele recurso deve ser tratado como não encontrado.

---

## Regra para memorizar

```text
[id]
    ↓
um valor

[...slug]
    ↓
vários valores

[[...slug]]
    ↓
zero ou vários valores

not-found.tsx
    ↓
recurso não encontrado
```
