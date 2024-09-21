import { toast } from "react-toastify";
import { apiSlice } from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.query({
      query: () => ({
        url: `user-logout`,
      }),
      async onQueryStarted(info, { queryFulfilled, dispatch }) {
        const id = toast.loading("Please Wait...", {
          position: "top-right",
          closeButton: true,
        });
        dispatch(userLoggedOut());
      },
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserVerificationMutation,
  useResendOTPMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useLazyLogoutQuery,
  useLoginMutation,
  useForgetPasswordVerificationMutation,
  useUpdatePasswordMutation,
} = authApi;
