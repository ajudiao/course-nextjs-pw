

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    // 1. Primeiro resolve a Promessa e extrai o ID
    const productId = (await params).productId;

    // 2. Só depois faz o return do HTML
    return (
        <h1>
            Detalhes do produto <br /> 
            id: {productId}
        </h1>
    );
}
