import Link from 'next/link';

export default async function ProductDetails({ 
  params 
}: { 
  params: Promise<{ productId: string }> 
}) {
  const productId = (await params).productId;
  
  return (
    <h1>
      Detalhes do produto <br />
      id: {productId}<br /><br />
      <Link href={`/products/${productId}/reviews/4`} className='flex gap-2 items-center underline'> <span> Views </span> <span className='rounded-full bg-lime-400 text-xs p-2 h-4 w-4 flex items-center justify-between font-semibold text-center'>2</span></Link>
    </h1>
  );
}
