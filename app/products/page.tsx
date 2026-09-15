import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface CategoriesProps {
    id: string,
    name: string,
    description: string
}

const categories: CategoriesProps[] = [
    {
        id: "gdgd66sds",
        name: "electronics",
        description: "blblblblblblb"
    },
    {
        id: "61gdgddss121",
        name: "accessories",
        description: "lsslslslsls"
    }
]

const products: ProductProps[] = [
  {
    id: "224f262ggsh2",
    name: "Iphone 14 pro max",
    description: "teste",
    category: "electronics",
  },
  {
    id: "224f162gg12g",
    name: "Iphone 14 pro max",
    description: "teste",
    category: "electronics",
  },
  {
    id: "224f162gg1j1j1",
    name: "Iphone 14 pro max",
    description: "teste",
    category: "electronics",
  },
  {
    id: "224f26211gd1h1",
    name: "Iphone 14 pro max",
    description: "teste",
    category: "electronics",
  },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Products</h1>
      <p>Welcome to the products page!</p>
      <Link href="/products/categories" className="underline">Ver categorias</Link>

      <div className="flex gap-4 flex-col gap-4 p-4 bg-fuchsia-200 mt-4">
        <h2>Lista de produtos</h2>
        {products.map((product: ProductProps) => (
          <Link key={product.id} href={`products/${product.id}`} className="underline">{product.name}</Link>
        ))}
      </div>
    </div>
  );
}
