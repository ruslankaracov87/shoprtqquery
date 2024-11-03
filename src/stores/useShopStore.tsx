import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IProduct {
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

interface BasketStore {
  basket: IProduct[];
  addBasket: (item: IProduct) => void;
  deleteBasket: (id: number) => void;
  incrementBasket: (id: number) => void;
  decrementBasket: (id: number) => void;
  // editBasketItem: (item: IProduct) => void;
}

export const useBasketStore = create<BasketStore>()(
  persist(
    (set, get) => ({
      basket: [],

      addBasket: (item) => {
        const isItemInBasket = get().basket.some(
          (basketItem) => basketItem._id === item._id
        );
        if (isItemInBasket) {
          console.warn("Item is already in the basket");
          return;
        }

        set((state) => ({
          basket: [...state.basket, item],
        }));
      },

      deleteBasket: (id) => {
        set((state) => ({
          basket: state.basket.filter((item) => item._id !== id),
        }));
      },

      incrementBasket: (id) => {
        set((state) => ({
          basket: state.basket.map((basketItem) =>
            basketItem._id === id
              ? { ...basketItem, count: basketItem.count + 1 }
              : basketItem
          ),
        }));
      },
      decrementBasket: (id) => {
        set((state) => ({
          basket: state.basket.map((basketItem) =>
            basketItem._id === id && basketItem.count > 1
              ? { ...basketItem, count: basketItem.count - 1 }
              : basketItem
          ),
        }));
      },
      // editBasketItem: (updatedItem) => {
      //   set((state) => ({
      //     basket: state.basket.map((basketItem) =>
      //       basketItem._id === updatedItem._id ? updatedItem : basketItem
      //     ),
      //   }));
      // },
    }),
    {
      name: "basketShopping",
      getStorage: () => localStorage,
    }
  )
);
