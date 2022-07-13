import Head from "next/head";
import ShowProducts from "../components/ShowProducts";
import Slider from "../components/Slider";
import FlashDeals from "../components/FlashDeals";
import Wrapper from "../components/Wrapper";
import Discount from "../components/Discount";
import Announcement from "../components/Announcement";

export default function Home({ data }) {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Slider />
          <FlashDeals />
          <Discount />
          <ShowProducts data={data} />
          <Announcement />
          <Wrapper />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const url = "http://" + context.req.headers.host + "/api/products";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
