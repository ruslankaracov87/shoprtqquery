"use client";
import { useGetProductsQuery } from "@/redux/api/shop";
import scss from "./Todays.module.scss";
import ProductCard from "../../ProductCard";

const Todays = () => {
  const { data: saleProduct } = useGetProductsQuery();

  return (
    <section className={scss.todays}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <div className={scss.bg}></div>
            <h3>Today's</h3>
          </div>
          <div className={scss.saleTime}> 
            <h1>Flesh Sales</h1>
            <div className={scss.time}>
              <div className={scss.timeBlock}>
                <h4>Days</h4>
                <h2>03</h2>
              </div>
              <span>:</span>
              <div className={scss.timeBlock}>
                <h4>Hours</h4>
                <h2>23</h2>
              </div>
              <span>:</span>
              <div className={scss.timeBlock}>
                <h4>Minutes</h4>
                <h2>19</h2>
              </div>
              <span>:</span>
              <div className={scss.timeBlock}>
                <h4>Seconds</h4>
                <h2>56</h2>
              </div>
            </div>
          </div>
          <div className={scss.saleProducts}>
            {saleProduct?.map((el) =>
              el.price > 25000 ? <ProductCard key={el._id} el={el} /> : null
            )}
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Todays;
