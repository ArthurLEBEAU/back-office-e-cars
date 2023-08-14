import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //Queries
    getExemples: builder.query({
      query: () => "exemple",
      providesTags: ["exemple"],
    }),
    getExemplebyId: builder.query({
      query: (id: any) => `/exemple/${id}`,
      providesTags: ["exemple"],
    }),
    getExemplebyName: builder.query({
      query: (name: any) => `/exemple/${name}`,
      providesTags: ["exemple"],
    }),
    //Mutations
    addExemple: builder.mutation({
      query: (initialExemple: any) => ({
        url: "/exemple",
        method: "POST",
        body: {
          ...initialExemple,
        },
      }),
      invalidatesTags: ["exemple"],
    }),
    deleteExemple: builder.mutation({
      query: (id: number) => ({
        url: `/exemple/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["exemple"],
    }),
    updateExemple: builder.mutation({
      query: (initialExemple: any) => ({
        url: `/exemple/${initialExemple.id}`,
        method: "PATCH",
        body: {
          ...initialExemple,
        },
      }),
      invalidatesTags: ["exemple"],
    }),
  }),
});

export const {
  useGetExemplesQuery,
  useGetExemplebyIdQuery,
  useGetExemplebyNameQuery,
  useAddExempleMutation,
  useDeleteExempleMutation,
  useUpdateExempleMutation,
} = extendedApiSlice;
