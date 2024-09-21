import { apiSlice } from "../../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => {
        return {
          url: "user/cart-items",
        };
      },
      providesTags: ["cartData"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});

export const { useLazyGetCartQuery } = cartApi;
