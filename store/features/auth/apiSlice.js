import { toast } from "react-toastify";
import { apiSlice } from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.query({
      query: () => ({
        url: `user-logout`,
      }),
      async onQueryStarted(info, { dispatch }) {
        toast.loading("Please Wait...", {
          position: "top-right",
          closeButton: true,
        });
        dispatch(userLoggedOut());
      },
    }),
    userRegister: builder.mutation({
      query: (data) => {
        const bodyFormData = new FormData();
        Object.entries({
          firstName: data.firstName,
          lastName: data.lastName,
          name: data.userName,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
          agree: data.agree,
        }).map(([key, value]) => {
          bodyFormData.append(`${key}`, value);
        });
        return {
          url: "store-register",
          method: "POST",
          body: bodyFormData,
          formData: true,
        };
      },
      async onQueryStarted(info, { queryFulfilled }) {
        const id = toast.loading("Please Wait...", {
          position: "top-right",
          closeButton: true,
        });
        try {
          const { data } = await queryFulfilled;
          if (data.message.includes("user_validation.Register successfully")) {
            toast.update(id, {
              render: `Account created successfully.`,
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          } else if (data.message) {
            toast.update(id, {
              render: data.message,
              type: "error",
              isLoading: false,
              // autoClose: 2000,
            });
          }
        } catch ({ error }) {
          console.log(
            "Improved Spoon Error    !!!!!!!!!!!!!!!!!!!!!!!!!  " +
              error.data.message
          );
          toast.update(id, {
            render: error.data.message,
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
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
