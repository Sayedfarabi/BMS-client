import { baseApi } from "../../api/baseApi";

const createSellerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSeller: builder.mutation({
      query: (userInfo) => {
        if (!userInfo) {
          throw new Error("Invalid userInfo provided");
        }

        return {
          url: "/users/create-seller",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useCreateSellerMutation } = createSellerApi;
