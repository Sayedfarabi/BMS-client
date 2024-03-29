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
      invalidatesTags: ["sell"],
    }),
    products: builder.query({
      query: (queries) => {
        console.log(queries);

        return {
          url: `/inventory?${queries}`,
          method: "GET",
        };
      },
      providesTags: ["sell"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        if (!id) {
          throw new Error("Invalid product data provided");
        }
        return {
          url: `/inventory/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["sell"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useProductsQuery,
  useDeleteProductMutation,
} = createProductApi;
