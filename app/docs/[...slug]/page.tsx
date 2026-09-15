import Link from "next/link";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        {" "}
        Viewing docs for feature {slug[0]} and concept {slug[1]}{" "}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Views docs for feature {slug[0]}</h1>;
  }

  return (
    <h1>
      Capturar todos os segmentos. <br />
      <br />
      Corresponde a qualque rota que tenha /docs no caminho
      <br />
      Roda no navegador:{" "}
      <Link
        href="/docs/teste01/teste02"
        className="underline italic text-blue-700"
      >
        {" "}
        http://localhost:3000/docs/aahs/sshs/hshs/dds/sdsdsds/sdsd{" "}
      </Link>
    </h1>
  );
}
