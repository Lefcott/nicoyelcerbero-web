import Layout from "@/components/Layout/index";
import Button from "@/components/Button";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Ácidamente - página no encontrada</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center">
          <h1 className="mt-16 text-2xl text-center">
            No se encontró la página que estabas buscando
          </h1>
          <div className="m-8">
            <Button isLink href="/">
              Volver al inicio
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}
