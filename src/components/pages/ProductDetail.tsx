"use client";
import React from "react";
import scss from "./ProductDetail.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/redux/api/shop";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useFavoriteStore } from "@/stores/useFavoriteStore";
import { useBasketStore } from "@/stores/useShopStore";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import ProductCard from "./ProductCard";

interface IProductCard {
  _id?: number;
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
  count: number;
  rating: {
    rate: number;
    countRating: number;
  };
}
interface IDetail {
  el: IProductCard;
}

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery();
  const { addFavorite, deleteFavorite, favorite } = useFavoriteStore();
  const { addBasket } = useBasketStore();
  const router = useRouter();

  const isItemInFavorite = favorite.some((item) => item._id === Number(id));

  function increment() {
    data?.map((el) =>
      el._id === Number(id) ? { ...el, count: el.count + 1 } : el
    );
  }

  function decrement() {
    data?.map((el) =>
      el._id === Number(id) && el.count > 1
        ? { ...el, count: el.count - 1 }
        : el
    );
  }

  const category = data?.map((el) =>
    el._id === Number(id) ? el.category : null
  );

  return (
    <div className={scss.detail}> 
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home /
              {data?.map((el) => (el._id === Number(id) ? el.category : null))}/{" "}
              <span>
                {data?.map((el) => (el._id === Number(id) ? el.title : null))}
              </span>
            </h5>
          </div>
          {data?.map((el) =>
            el._id === Number(id) ? (
              <div className={scss.detail} key={el._id}>
                <div className={scss.img}>
                  <div className={scss.images}>
                    <img src={el.image} alt="" />
                    <img src={el.image} alt="" />
                    <img src={el.image} alt="" />
                    <img src={el.image} alt="" />
                  </div>
                  <div className={scss.image}>
                    <img src={el.image} alt="" />
                  </div>
                </div>
                <div className={scss.text}>
                  <h2>{el.title}</h2>
                  <div className={scss.rating}>
                    <span>
                      <FaStar
                        style={{
                          color: el?.rating?.rate >= 1 ? "yellow" : "gray",
                        }}
                      />
                      <FaStar
                        style={{
                          color: el?.rating?.rate >= 2 ? "yellow" : "gray",
                        }}
                      />
                      <FaStar
                        style={{
                          color: el?.rating?.rate >= 3 ? "yellow" : "gray",
                        }}
                      />
                      <FaStar
                        style={{
                          color: el?.rating?.rate >= 4 ? "yellow" : "gray",
                        }}
                      />
                      <FaStar
                        style={{
                          color: el?.rating?.rate >= 5 ? "yellow" : "gray",
                        }}
                      />
                    </span>
                    <h6>({el?.rating?.countRating} Reviews) |</h6>
                    <h6>
                      <span>In Stock</span>
                    </h6>
                  </div>
                  <h4>${el.price}</h4>
                  <p>{el.description}</p>
                  <hr />
                  <div className={scss.size}>
                    <h4>Size:</h4>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                  </div>
                  <div className={scss.buttons}>
                    <div className={scss.quantity}>
                      <button className={scss.decr} onClick={() => decrement()}>
                        -
                      </button>
                      <h3>{el.count}</h3>
                      <button className={scss.incr} onClick={() => increment()}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        addBasket(el);
                      }}
                    >
                      Buy Now
                    </button>
                    <div className={scss.favorite}>
                      <a
                        onClick={() =>
                          isItemInFavorite
                            ? deleteFavorite(el?._id!)
                            : addFavorite(el)
                        }
                      >
                        {isItemInFavorite ? (
                          <GoHeartFill
                            style={{
                              color: "red",
                            }}
                          />
                        ) : (
                          <GoHeart />
                        )}
                      </a>
                    </div>
                  </div>
                  <div className={scss.delivery}>
                    <div className={scss.block}>
                      <a>
                        <TbTruckDelivery />
                      </a>
                      <div className={scss.deliveryText}>
                        <h5>Free Delivery</h5>
                        <h6>
                          Enter your postal code for Delivery Availability
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className={scss.block}>
                      <a>
                        <BsArrowRepeat />
                      </a>
                      <div className={scss.deliveryText}>
                        <h5>Return Delivery</h5>
                        <h6>Free 30 Days Delivery Returns. Details</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
          <div className={scss.Products}>
            <div className={scss.mainText}>
              <div className={scss.bg}></div>
              <h3>Related Item</h3>
            </div>
            {data?.map((el) =>
              el._id === Number(id) ? (
                <div className={scss.typeProducts}>
                  {data?.map((item) =>
                    item.category === el.category ? (
                      <ProductCard el={item} />
                    ) : null
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
