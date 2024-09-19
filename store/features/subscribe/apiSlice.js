import { apiSlice } from "@/store/api/apiSlice";
import { toast } from "react-toastify";

export const subscribeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: ({ data, handler }) => {
        return {
          url: `/newsletter-request?lang_code=en`,
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(info, { queryFulfilled, dispatch }) {
        toast.loading("Please Wait ...", {
          position: "top-right",
          closeButton: true,
        });
      },
    }),
  }),
});

export const { useSendEmailMutation } = subscribeApi;
