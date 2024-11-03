import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    postProducts: build.mutation<SHOP.postShopResponse, SHOP.postShopRequest>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["shop"],
    }),
    getProducts: build.query<SHOP.getShopResponse, SHOP.getShopRequest>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["shop"],
    }),
    delProducts: build.mutation<SHOP.delShopResponse, SHOP.delShopRequest>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shop"],
    }),
  }),
});

export const {
  usePostProductsMutation,
  useGetProductsQuery,
  useDelProductsMutation,
} = api;
