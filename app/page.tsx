import Categories from "@/components/Sections/Homepage/Categories";
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
    </>
  );
}
