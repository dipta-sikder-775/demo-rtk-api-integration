// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// interface Quote {
//   id: number
//   quote: string
//   author: string
// }

// interface QuotesApiResponse {
//   quotes: Quote[]
//   total: number
//   skip: number
//   limit: number
// }

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),
  reducerPath: "api",
  // Tag types are used for caching and invalidation.
  tagTypes: [
    // category
    "getAllCategory",
    "getACategory",
  ],
  endpoints: build => ({}),
})
