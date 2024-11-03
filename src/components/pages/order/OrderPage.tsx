"use client";
import { useOrderStore } from "@/stores/useOrderStore";
import scss from "./OrderPage.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { GiMagicBroom } from "react-icons/gi";

const OrderPage = () => {
  const { order, deleteOrder } = useOrderStore();
  console.log(order, "Order"); 
  
  return (
    <section className={scss.order}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <h5>
              Home / <span>Order</span>
            </h5>
            <button onClick={() => localStorage.removeItem("orderShopping")}>
              Clear History <GiMagicBroom />
            </button>
          </div>
          <div className={scss.orderBlocks}>
            {order.map((el) => (
              <div className={scss.orderBlock}>
                <a onClick={() => deleteOrder(el._id)}>
                  <IoIosCloseCircle />
                </a>
                <h4>
                  User Name: <span>{el.name}</span>
                </h4>
                <h4>
                  User Address: <span>{el.address}</span>
                </h4>
                <h4>
                  User Email: <span>{el.email}</span>
                </h4>
                <h4>
                  Order ID: <span>{el._id}</span>
                </h4>
                <h6>{el.date}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
