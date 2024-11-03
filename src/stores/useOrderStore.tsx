import { create } from "zustand";
import { persist } from "zustand/middleware";
interface IHistory {
  _id: number;
  name: string;
  address: string;
  date: string;
  email: string;
}

interface OrderStore {
  order: IHistory[];
  addOrder: (item: IHistory) => void;
  deleteOrder: (id: number) => void;
  // editOrderItem: (item: IProduct) => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      order: [],

      addOrder: (item) => {
        const isItemInOrder = get().order.some(
          (OrderItem) => OrderItem._id === item._id
        );
        if (isItemInOrder) {
          console.warn("Item is already in the Order");
          return;
        }

        set((state) => ({
          order: [...state.order, item],
        }));
      },

      deleteOrder: (id) => {
        set((state) => ({
          order: state.order.filter((item) => item._id !== id),
        }));
      },
      // editOrderItem: (updatedItem) => {
      //   set((state) => ({
      //     Order: state.Order.map((OrderItem) =>
      //       OrderItem._id === updatedItem._id ? updatedItem : OrderItem
      //     ),
      //   }));
      // },
    }),
    {
      name: "orderShopping",
      getStorage: () => localStorage,
    }
  )
);
