import Categories from "@/components/Sections/Homepage/Categories";
import RecommendedProduct from "@/components/Sections/Homepage/RecommendedProduct";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}api?lang_code=en`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  } else {
    return res?.json();
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Categories datas={data?.categories} />
      <RecommendedProduct
        cardStyle="bg-black"
        datas={data?.recommend_products}
      />
    </>
  );
}
