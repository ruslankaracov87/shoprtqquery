"use client";
import { useGetProductsQuery } from "@/redux/api/shop";
import scss from "./Welcome.module.scss";
import { FaAngleRight } from "react-icons/fa6";
import img from "../../../assets/img/welcome.png";
import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { LuArrowRight } from "react-icons/lu";

const Welcome = () => {
  const { data: getProduct } = useGetProductsQuery();

  const categories = [
    {
      title: "Woman’s Fashion",
      icon: <FaAngleRight />,
    },
    {
      title: "Men’s Fashion",
      icon: <FaAngleRight />,
    },
    {
      title: "Electronics",
    },
    {
      title: "Home & Lifestyle",
    },
    {
      title: "Medicine",
    },
    {
      title: "Sports & Outdoor",
    },
    {
      title: "Baby’s & Toys",
    },

    {
      title: "Groceries & Pets",
    },
    {
      title: "Health & Beauty",
    },
  ];

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.categories}>
            {categories.map((el, idx) => (
              <h3 key={idx}>
                {el.title} <span>{el.icon}</span>
              </h3>
            ))}
          </div>
          <div className={scss.hr}></div>
          <div className={scss.products}>
            <div className={scss.productBlock}>
              <div className={scss.text}>
                <h6>
                  <span>
                    <BsApple />
                  </span>
                  iPhone 14 Series
                </h6>
                <h1>
                  Up to 10% <br /> off Voucher
                </h1>
                <h4>
                  Shop Now <LuArrowRight />
                </h4>
              </div>
              <Image src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
