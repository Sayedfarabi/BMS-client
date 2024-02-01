/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppDispatch } from "./../hooks";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bms-server-rho.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

// customs base query
const baseQueryWithAccessToken = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const result = await baseQuery(args, api, extraOptions);
  // console.log(result);

  if (result.error?.status === 401) {
    api.dispatch(logout());

    // result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: baseQuery,
  baseQuery: baseQueryWithAccessToken,
  tagTypes: ["sell"],
  endpoints: () => ({}),
});
