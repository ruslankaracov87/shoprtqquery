"use client";
import { useFavoriteStore } from "@/stores/useFavoriteStore";
import scss from "./FavoritePage.module.scss";
import ProductCard from "../ProductCard";
import { useRouter } from "next/navigation";
import { BsHouseHeart } from "react-icons/bs";

const FavoritePage = () => {
  const { favorite } = useFavoriteStore();
  const router = useRouter();
  return (
    <section className={scss.favorite}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>Favorite</span>
            </h5>
          </div>
          <div className={scss.favoriteProducts}>
            {favorite.length === 0 ? (
              <div className={scss.notFavorite}>
                <a>
                  <BsHouseHeart />
                </a>
                <h2>Избранное пусто , выберите товар который вам понравился</h2>
                <button onClick={() => router.push("/")}>Выбрать товар</button>
              </div>
            ) : (
              favorite.map((el) => <ProductCard el={el} key={el._id} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritePage;
