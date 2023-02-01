import Layout from "@/components/Layout/index";
import ShowCards from "@/components/ShowCards";
import { getShows } from "@/services/api/shows";
import Head from "next/head";

export default function Home({ shows }) {
  return (
    <>
      <Head>
        <title>Nico y El Cerbero - shows</title>
      </Head>
      <Layout>
        <div className="mt-16">
          <ShowCards shows={shows} />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(props) {
  const { data: shows } = await getShows();

  return {
    props: {
      shows,
    },
  };
}
