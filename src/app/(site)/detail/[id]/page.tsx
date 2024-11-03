"use client";
import { useParams } from "next/navigation";
import scss from "./page.module.scss";
import { useGetProductsQuery } from "@/redux/api/shop";
import ProductDetail from "@/components/pages/ProductDetail";

const page = () => {
  const { id } = useParams();
  console.log(+id!, "this is my id");
  const { data } = useGetProductsQuery();
  const detail = data?.filter((el) => el._id == +id!);
  return (
    <>
      <ProductDetail />
    </>
  );
};

export default page;
