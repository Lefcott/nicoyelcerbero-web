import BuyTicketsButton from "@/components/BuyTIcketsButton";
import BuyTicketsForm from "@/components/BuyTicketsForm";
import Layout from "@/components/Layout/index";
import ShowBanner from "@/components/ShowBanner";
import ShowInfo from "@/components/ShowInfo/index";
import { getShow } from "@/services/api/shows";
import Head from "next/head";
import Script from "next/script";

export default function ShowDetails({ show }) {
  return (
    <>
      <Head>
        <title>Nico y El Cerbero - comprar entradas</title>
      </Head>
      <Script src="https://sdk.mercadopago.com/js/v2" />
      <Layout>
        <div className="flex flex-col justify-start">
          <ShowBanner show={show} />
          <div className="mt-5 px-8 md:px-0">
            <ShowInfo show={show} />
          </div>
          <div className="mt-5 px-8 md:px-0">
            <BuyTicketsButton />
          </div>
          <div className="mt-96 px-8 md:px-0">
            <BuyTicketsForm showKey={show.key} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(props) {
  const { showKey } = props.query;
  const { data: show } = await getShow(showKey);

  return {
    props: {
      show,
    },
  };
}
