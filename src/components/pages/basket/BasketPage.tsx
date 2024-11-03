"use client";
import { useRouter } from "next/navigation";
import scss from "./BasketPage.module.scss";
import { useBasketStore } from "@/stores/useShopStore";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";

const BasketPage = () => {
  const router = useRouter();
  const {
    basket: data,
    deleteBasket,
    incrementBasket,
    decrementBasket,
  } = useBasketStore();

  function toCheckout() {
    if (data.length > 0) {
      router.push("/basket/checkout");
    } else {
      alert("Пожалуйста выберите товар для заказа");
    }
  }

  return (
    <section className={scss.basket}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>Cart</span>
            </h5>
          </div>
          <div className={scss.basketProducts}>
            <div className={scss.basketMain}>
              <h4>Product</h4>
              <h4 className={scss.price}>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>
            {data.length === 0 ? (
              <div className={scss.notBasket}>
                <a>
                  <FaOpencart />
                </a>
                <h2>Ваша корзина пуста выберите товар</h2>
                <button onClick={() => router.push("/")}>Выбрать товар</button>
              </div>
            ) : (
              data.map((el) => (
                <div className={scss.basketProduct} key={el._id}>
                  <div className={scss.imgName}>
                    <a onClick={() => deleteBasket(el?._id!)}>
                      <IoIosCloseCircle />
                    </a>
                    <img src={el.image} alt="" />
                    <h4>{el.title}</h4>
                  </div>
                  <h4 className={scss.price}>
                    ${el.price > 25000 ? el.price * 0.8 : el.price}
                  </h4>
                  <div className={scss.quantity}>
                    <button>
                      <h4>{el.count}</h4>
                      <span>
                        <a onClick={() => incrementBasket(el?._id!)}>
                          <GoChevronUp />
                        </a>
                        <a onClick={() => decrementBasket(el?._id!)}>
                          <GoChevronDown />
                        </a>
                      </span>
                    </button>
                  </div>
                  <h4 className={scss.subtotal}>
                    $
                    {el.price > 25000
                      ? el.price * 0.8 * el.count
                      : el.price * el.count}
                  </h4>
                </div>
              ))
            )}
          </div>
          <div className={scss.basketButtons}>
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className={scss.basketDetails}>
            <div className={scss.coupon}>
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className={scss.cart}>
              <h2>Cart Total</h2>
              <div className={scss.total}>
                <h4>Subtotal:</h4>
                <h4>
                  $
                  {data.reduce(
                    (acc, el) =>
                      acc + el.price > 25000
                        ? acc + el.price * 0.8 * el.count
                        : acc + el.price * el.count,
                    0
                  )}
                </h4>
              </div>
              <hr />
              <div className={scss.total}>
                <h4>Shipping:</h4>
                <h4>Free</h4>
              </div>
              <hr />
              <div className={scss.total}>
                <h4>Total:</h4>
                <h4>
                  $
                  {data.reduce(
                    (acc, el) =>
                      el.price > 25000
                        ? acc + el.price * 0.8 * el.count
                        : acc + el.price * el.count,
                    0
                  )}
                </h4>
              </div>
              <button onClick={() => toCheckout()}>Procees to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketPage;
