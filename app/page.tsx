import Categories from "@/components/Sections/Homepage/Categories";
import RecommendedProduct from "@/components/Sections/Homepage/RecommendedProduct";
import SliderProducts from "@/components/Sections/Homepage/SliderProducts";
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
      <SliderProducts
        datas={data?.category_three}
        title={data?.category_three?.category?.name}
        tag="Unlimited Offer"
        url={`/products?category=${data?.category_three?.category?.slug}`}
        className="bg-black pb-[60px]"
      />
      <RecommendedProduct
        cardStyle="bg-black"
        datas={data?.recommend_products}
      />
    </>
  );
}
