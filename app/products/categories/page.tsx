import Link from "next/link"


export default function CategoriesPage() {

    return (
        <div>
            <h3>Categorias</h3>
            <ul>
                <li><Link href="/products/categories/accessories">Electonicos</Link></li>
                <li><Link href="">Acessorios</Link> </li>
            </ul>
        </div>
    )
}