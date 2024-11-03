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

interface FavoriteStore {
  favorite: IProduct[];
  addFavorite: (item: IProduct) => void;
  deleteFavorite: (id: number) => void;
  // editFavoriteItem: (item: IProduct) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorite: [],

      addFavorite: (item) => {
        const isItemInFavorite = get().favorite.some(
          (FavoriteItem) => FavoriteItem._id === item._id
        );
        if (isItemInFavorite) {
          console.warn("Item is already in the Favorite");
          return;
        }

        set((state) => ({
          favorite: [...state.favorite, item],
        }));
      },

      deleteFavorite: (id) => {
        set((state) => ({
          favorite: state.favorite.filter((item) => item._id !== id),
        }));
      },
      // editFavoriteItem: (updatedItem) => {
      //   set((state) => ({
      //     Favorite: state.Favorite.map((FavoriteItem) =>
      //       FavoriteItem._id === updatedItem._id ? updatedItem : FavoriteItem
      //     ),
      //   }));
      // },
    }),
    {
      name: "favoriteShopping",
      getStorage: () => localStorage,
    }
  )
);
