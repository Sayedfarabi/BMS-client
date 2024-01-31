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
    getSellHistory: builder.query({
      query: (queries) => ({
        url: `/sales/history/${queries}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSellMutation, useGetSellHistoryQuery } = sellApi;
