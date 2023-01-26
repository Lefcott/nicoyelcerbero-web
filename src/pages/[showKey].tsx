import BuyTicketsButton from "@/components/BuyTIcketsButton";
import BuyTicketsForm from "@/components/BuyTicketsForm";
import Layout from "@/components/Layout/index";
import ShowBanner from "@/components/ShowBanner";
import ShowInfo from "@/components/ShowInfo/index";
import shows from "../data/shows";

export default function ShowDetails({ show }) {
  return (
    <>
      <Layout>
        <div className="flex flex-col justify-start">
          <ShowBanner show={show} />
          <div className="mt-5">
            <ShowInfo show={show} />
          </div>
          <div className="mt-5">
            <BuyTicketsButton />
          </div>
          <div className="mt-96">
            <BuyTicketsForm />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(props) {
  const { showKey } = props.query;

  return {
    props: {
      show: shows.find((show) => show.key === showKey),
    },
  };
}
