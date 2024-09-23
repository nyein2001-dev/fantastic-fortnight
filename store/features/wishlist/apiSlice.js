import { apiSlice } from "../../api/apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: () => {
        return {
          url: "user/wishlist?lang_code=en",
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
  }),
});

export const {
  useGetWishListQuery,
  useLazyGetWishListQuery,
  useAddWishListMutation,
  useDeleteWishListMutation,
} = wishlistApi;
