import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    postRegisterCustomer: builder.mutation<void, counter>({
      query: (user) => ({
        url: "/registerUser",
        method: "POST",
        body: user,
      }),
    }),
    postLoginCustomer: builder.mutation<JSON, login>({
      query: (user) => {
        return {
          url: "/loginUser",
          method: "POST",
          body: user,
        };
      },
    }),
    logoutCustomer: builder.query<void, void>({
      query: () => `/customer/logoutCustomer`,
    }),
   
    
  }),
});

export const {
  usePostRegisterCustomerMutation,
  usePostLoginCustomerMutation,

} = api;