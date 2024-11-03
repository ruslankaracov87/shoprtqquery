"use client";
import { useState } from "react";
import scss from "./Checkout.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useBasketStore } from "@/stores/useShopStore";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import axios from "axios";
import { useOrderStore } from "@/stores/useOrderStore";

interface IOrder {
  name: string;
  company: string;
  address: string;
  optional: string;
  city: string;
  number: string;
  email: string;
  check: boolean;
}

interface IHistory {
  _id: number;
  name: string;
  address: string;
  date: string;
  email: string;
}

const Checkout = () => {
  const [check, setCheck] = useState(false);
  const [bank, setBank] = useState(false);
  const [cash, setCash] = useState(false);
  const { register, handleSubmit, reset } = useForm<IOrder>();
  const { basket: data } = useBasketStore();
  const { addOrder } = useOrderStore();

  const onOrder: SubmitHandler<IOrder> = (user) => {
    if (!check) {
      alert("Дайте согласие что вы предпринимаетль товара");
    } else if (bank || cash) {
      let my_id = `-1002155692436`;
      let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
      let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

      let newProduct = {
        chat_id: my_id,
        parse_model: "html",
        text: `
      Shopping Order!
      User Name: ${user.name},
      User Company: ${user.company},
      User Address: ${user.address},
      User Optional: ${user.optional},
      User City: ${user.city},
      User Number: ${user.number},
      User Email: ${user.email},
      Order Name: ${data.map((el) => el.title)},
      Order Count: ${data.map((el) => el.count)}
      Order Price: $ ${data.reduce(
        (acc, el) =>
          acc + el.price > 25000
            ? acc + el.price * 0.8 * el.count
            : acc + el.price * el.count,
        0
      )}}
      `,
      };

      const newData = {
        _id: Date.now(),
        name: user.name,
        address: user.address,
        email: user.email,
        date: new Date().toLocaleString(),
      };
      addOrder(newData);

      axios.post(api_key, newProduct);
      // reset();
      setCheck(false);
      setBank(false);
      setCash(false);
      alert("Заказ успешно отправлен");
    } else {
      alert("Выберите метод оплаты");
    }
  };

  return (
    <section className={scss.checkout}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>Checkout</span>
            </h5>
          </div>
          <h1>Billing Details</h1>
          <div className={scss.checkoutDetails}>
            <div className={scss.billing}>
              <form onSubmit={handleSubmit(onOrder)}>
                <div className={scss.input}>
                  <h6>
                    First Name <span>*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("name", { required: true })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>Company Name</h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("company", { required: false })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>
                    Street Address <span>*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("address", { required: true })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>Apartment, floor, etc. (optional)</h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("optional", { required: false })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>
                    Town/City <span>*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("city", { required: true })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>
                    Phone Number <span>*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("number", { required: true })}
                  />
                </div>
                <div className={scss.input}>
                  <h6>
                    Email Address <span>*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder=""
                    {...register("email", { required: true })}
                  />
                </div>
                <div className={scss.check}>
                  <a onClick={() => setCheck(!check)}>
                    {check ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                  </a>
                  <h5>Save this information for faster check-out next time</h5>
                </div>
              </form>
            </div>
            <div className={scss.cart}>
              <div className={scss.products}>
                {data.map((el) => (
                  <div className={scss.product} key={el._id}>
                    <div className={scss.imgName}>
                      <img src={el.image} alt="" />
                      <h4>{el.title}</h4>
                    </div>
                    <h4>
                      $
                      {el.price > 25000
                        ? el.price * 0.8 * el.count
                        : el.price * el.count}
                    </h4>
                  </div>
                ))}
              </div>
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
                      acc + el.price > 25000
                        ? acc + el.price * 0.8 * el.count
                        : acc + el.price * el.count,
                    0
                  )}
                </h4>
              </div>
              <div className={scss.bank}>
                <div className={scss.clickCheck}>
                  <div className={scss.click}>
                    <a
                      onClick={() => {
                        setBank(!bank);
                        setCash(false);
                      }}
                    >
                      {bank ? (
                        <MdOutlineRadioButtonChecked />
                      ) : (
                        <MdOutlineRadioButtonUnchecked />
                      )}
                    </a>
                    <h4>Bank</h4>
                  </div>
                  <div className={scss.click}>
                    <a
                      onClick={() => {
                        setBank(false);
                        setCash(!cash);
                      }}
                    >
                      {cash ? (
                        <MdOutlineRadioButtonChecked />
                      ) : (
                        <MdOutlineRadioButtonUnchecked />
                      )}
                    </a>
                    <h4>Cash on delivery</h4>
                  </div>
                </div>
                <div className={scss.bankCart}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/bacb/ff99/a8fc8e50822cb2d2d168e5d0e8bf7ea6?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cbnws9~FIcR71jcQ0nbz~u9XpXeXjcr6X1O~HzO67r6zAeByCDQMYJekIE4vqoChImYyHAh3MTIDUlrew8FX01dWQXkaU3KkG5Et2dlKZ93D0TIUuaIylVXoE2mvwcefwK~M6dj7Oi0M0Uz4afNSL5forVH2-O9YJF1QiJIpkM9HWfmaMb6Y0jvYxIbeCTQz7GjF-6seRAie28QLD4b~DezDUtbV7Td6Evj7CvoDgpNL3m0isPqls994gKaD6v1SqOuUHQ8WKw6zaTIHMR3LvF~B5mkCc1BpBFWWrXiGOrZAZJsxJ6B0nDP3nDP4a5lvQ9NFA6hC6JgXR7yID6nnOw__"
                    alt=""
                  />
                  <img
                    src="https://s3-alpha-sig.figma.com/img/cfb0/a6ee/01b240273b40dab07f8246ef98aed88a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-euNOPJPrvcGHDJ0L12EhCJCdoIdKNoFzEI0NH88Qh4KLm5k3jrXDQyfbwSA81yPirseL4pzz6zajhQFcugD4giDmA010yoL0ZqSxokNVLd3Xg6K~b46Lii-OTSYhv75PAe9op9NrtGEkWbf44iN7aHLfPnNGNQzdlvzwX82V4H7EJzdxHbgnTm3QnLth6cLXPymrAirY9GCEQY6FonF4FeA3DIdout07BAj~K9bLtQDls-5Q5YElhio7dc6oqIYF0iHHUjHBPxqeJ-EG0hz0XKYTL9IhVF2YxTB0hHWqNXkth2nOPz8TWyk6tl08PbvaTGYvA-y6YWl034J9F-Kw__"
                    alt=""
                  />
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6eef/b61d/27c754abac218d25d8ea4360de61f8e8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpVO96J9HGJPQtL70OQnoin~4DtZYMyN5H5cgFRR~0R4QRLSyShL6pFAOoNKv-2bYrBf8uuyD~l-xgiTEpjAyBcicSqyDMGeokxDJ1i-mo1t7ige~r-2-oSx~hHEXYKO6rCC7eLZRerRJBtMw6i0~PWVdKTZtEFa-7XERphg3-jr3o0rF-gTjKNC10qRk5Xp7jeCTSYDOH7HMAlIZ68IAnENDUwhOnfgZIfd~t-aahty0iV9Cfg~2Eh~JbjEumfqjD7Y5UGKlXSOHxUCnyMSQrG1ypB-tEFtd0gRbtMbKpK3bUGUpktbYQ5Fz15PTS29tUVzMU7d~oZt1GjEcDxqIA__"
                    alt=""
                  />
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b28e/31b9/c88d0c9b038b82deeb0523d82cffe267?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaNGmmFCUGKfXOZvWiUZ5lcDWxFSxn7WusRPd-RSVlSulcXrJKBa~f5GWZIStERjh7ykl6NgkzMsydxFxmcICErqzK8MpRkG5I96Y6psRlGfdSHR2xvm~xK3-7huq9IReBqQmHDgo7OMY-IRREP49yGlThEnkrnJBqjTNgT9h7Svu3pru1ZhvgHFjNWzRGxeOIsSxWyxRIH-3Op9jRGM4sBz0L0wYCldvZYsc9XV1ppvDc6PEK~b0g1M7m3RAYQsGqel95BHh79SVEC6XDDV7b5~BCW~fUY3E4UG5M-Ga0nQa-2fz7E8ROeBcAjAuDaLXwZ3xgXLEMABzcUVESvsdA__"
                    alt=""
                  />
                </div>
              </div>
              <div className={scss.input}>
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <form onSubmit={handleSubmit(onOrder)}>
                <button type="submit">Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
