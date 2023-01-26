import Layout from "@/components/Layout/index";
import ShowCards from "@/components/ShowCards";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico y El Cerbero - shows</title>
      </Head>
      <Layout>
        <div className="mt-16">
          <ShowCards />
        </div>
      </Layout>
    </>
  );
}
