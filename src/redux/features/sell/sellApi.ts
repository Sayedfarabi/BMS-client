import { baseApi } from "../../api/baseApi";
import { TSellPayload } from "./sellSlice";

const sellApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSell: builder.mutation({
      query: (payload: TSellPayload) => ({
        url: `/sales/${payload._id}`,
        method: "POST",
        body: payload?.sellData,
      }),
    }),
  }),
});

export const { useCreateSellMutation } = sellApi;
