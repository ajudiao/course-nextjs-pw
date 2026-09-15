import Link from "next/link"

export default async function  ReviewsPage ({ params }: {
    params: Promise<{productId: string}>
}) {
    const { productId } = await params
    const views = [
        {
            id: 1,
            detals: "lorejsjsjs"
        },
        {
            id: 2,
            detals: "lorejsjsjs"
        },
    ]

    return (
        <div>
            <h2>Visualizacoes do produto: {productId}</h2>

            {views.map((view) => (
                <Link key={view.id} href="">
                    {view.detals}
                </Link>
            ))}

        </div>
    )
}