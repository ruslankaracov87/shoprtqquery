"use client";
import { useGetProductsQuery } from "@/redux/api/shop";
import scss from "./Our.module.scss";
import ProductCard from "../../ProductCard";
import { useState } from "react";

const Our = () => {
  const { data: our } = useGetProductsQuery();
  const [all, setAll] = useState(8); // Начальное количество видимых продуктов
  const [showAll, setShowAll] = useState(false);
  return (
    <section className={scss.our}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <div className={scss.bg}></div>
            <h3>This Month</h3>
          </div>
          <h1>Explore Our Products</h1>
          <div className={scss.ourProducts}>
            {our?.slice(0, all).map((el) => (
              <ProductCard el={el} key={el._id}/>
            ))}
          </div>
          <div className={scss.button}>
            <button
              onClick={() => {
                if (showAll) {
                  setAll(8);
                } else {
                  setAll(our?.length || 0);
                }
                setShowAll(!showAll);
              }}
            >
              {showAll ? "Hide All Products" : "Show All Products"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our;
