"use client";
import scss from "./ProductCard.module.scss";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { useBasketStore } from "@/stores/useShopStore";
import { useFavoriteStore } from "@/stores/useFavoriteStore";
import { useRouter } from "next/navigation";

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
interface IElement {
  el: IProductCard;
}

const ProductCard = ({ el }: IElement) => {
  const { addBasket, basket, deleteBasket } = useBasketStore();
  const { addFavorite, favorite, deleteFavorite } = useFavoriteStore();
  const router = useRouter();

  const isItemInBasket = basket.some((item) => item._id === el._id);
  const isItemInFavorite = favorite.some((item) => item._id === el._id);

  return (
    <section className={scss.productCard} key={el?._id}>
      <div className={scss.img}>
        {el?.price > 25000 ? <button className={scss.sale}>-20%</button> : null}
        <a>
          {!isItemInFavorite ? (
            <GoHeart onClick={() => addFavorite(el)} />
          ) : (
            <GoHeartFill
              onClick={() => deleteFavorite(el._id!)}
              style={{
                color: "red",
              }}
            />
          )}
        </a>
        <img src={el?.image} alt="" />
        <button
          className={isItemInBasket ? scss.notCart : scss.cart}
          onClick={() =>
            !isItemInBasket ? addBasket(el) : deleteBasket(el?._id!)
          }
        >
          {isItemInBasket ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
      <h2 onClick={() => router.push(`/detail/${el._id}`)}>
        {el?.title?.length > 30
          ? el?.title.substring(0, 30) + "..."
          : el?.title}
      </h2>
      <div className={scss.price}>
        <h2>${el?.price > 25000 ? el?.price * 0.8 : el?.price}</h2>
        {el?.price > 25000 ? <h3>${el?.price}</h3> : null}
      </div>
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
        <h6>({el?.rating?.countRating})</h6>
      </div>
    </section>
  );
};

export default ProductCard;
