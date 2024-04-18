import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    // Перевод текста
    translateText: builder.mutation<{text: string}, {text: string, direction: string}>({
      query: (body) => ({
        url: `/v1/translate`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  util: { getRunningQueriesThunk },
  useTranslateTextMutation,
} = profileApi;
export const api = profileApi;
