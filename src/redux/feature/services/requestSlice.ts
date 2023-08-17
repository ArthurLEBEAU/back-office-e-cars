import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequest: builder.query({
      query: () => "/request",
      providesTags: ["Request"],
    }),
    cancelRequest: builder.mutation({
      query: (id: number) => ({
        url: `/request/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Request"],
    }),
    confirmRequest: builder.mutation({
      query: ({ request, id }: any) => ({
        url: `/request/${id}`,
        method: "PATCH",
        body: request,
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const {
  useGetRequestQuery,
  useCancelRequestMutation,
  useConfirmRequestMutation,
} = extendedApiSlice;
