"use client";
import { useGetProductsQuery } from "@/redux/api/shop";
import scss from "./Month.module.scss";
import ProductCard from "../../ProductCard";

const Month = () => {
  const { data: selling } = useGetProductsQuery();

  return (
    <section className={scss.month}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <div className={scss.bg}></div>
            <h3>This Month</h3>
          </div>
          <div className={scss.sellingText}>
            <h1>Best Selling Products</h1>
            <button>View All</button>
          </div>
          <div className={scss.sellingProducts}>
            {selling?.map((el) => (
              <ProductCard el={el} key={el._id}/>
            ))}
          </div>
        </div>
        <div className={scss.categoryBigBlocks}>
          <div className={scss.categoryBigBlock}>
            <div className={scss.text}>
              <span>Categories</span>
              <h1>
                Enhance Your <br /> Music Experience
              </h1>
              <div className={scss.timeBlocks}>
                <div className={scss.timeBlock}>
                  <h2>10</h2>
                  <h4>Days</h4>
                </div>
                <div className={scss.timeBlock}>
                  <h2>20</h2>
                  <h4>Hours</h4>
                </div>
                <div className={scss.timeBlock}>
                  <h2>30</h2>
                  <h4>Minutes</h4>
                </div>
                <div className={scss.timeBlock}>
                  <h2>00</h2>
                  <h4>Seconds</h4>
                </div>
              </div>
              <button>Buy Now!</button>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJS8v274VSr0B6YosRqYpel40OiXDobfKEUWdmxhWX4DAf0OLUGoRH3YuvjOctwTaDi8UZl3QAeK6C1GrtoyjnA7Sb~n1NXZjodkpEqtUSpv0sGbPxxaBT4Q31AZjLSl7FfmTuHzWDmAgjuaOMpO3bJf93taCUFOag4KlbVOBy7fEdIjjmd2FRyKdXSvxo-i47jSonasRhiDwGNN2t3TrAfmhoWKkAsGYvLi-vgqV9B6z~C~I6Dw7TCEzLZGH7tSbCxzm-70Gjciidcb65JIfx9zlhinO0jurI2411UvaRcuY8IwNWTBBpbL7vuWWJvNI48q~Mlxp90m6GYuafQ2KA__"
              alt=""
            />
            <button className={scss.adaptation}>Buy Now!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Month;
