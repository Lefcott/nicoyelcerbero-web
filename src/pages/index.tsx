import Layout from "@/components/Layout/index";
import ShowCards from "@/components/ShowCards";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="mt-16">
          <ShowCards />
        </div>
      </Layout>
    </>
  );
}
