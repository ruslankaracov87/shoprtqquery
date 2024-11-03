import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SHOP,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const result = await baseQuery(args, api, extraOption);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["shop"],
  endpoints: () => ({}),
});
