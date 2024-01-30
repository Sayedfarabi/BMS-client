import { baseApi } from "../../api/baseApi";

const createProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => {
        if (!productData) {
          throw new Error("Invalid product data provided");
        }
        return {
          url: "/inventory/",
          method: "POST",
          body: productData,
        };
      },
    }),
  }),
});

export const { useCreateProductMutation } = createProductApi;