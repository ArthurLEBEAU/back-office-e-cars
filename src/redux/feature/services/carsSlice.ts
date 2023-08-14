import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/car",
      providesTags: ["Cars"],
    }),
    addCar: builder.mutation<{}, FormData>({
      query: (car) => ({
        url: "/car",
        method: "POST",
        body: car,
      }),
      invalidatesTags: ["Cars"],
    }),
    updateCar: builder.mutation<{}, FormData>({
      query: ({ car, id }: any) => ({
        url: `/car/${id}`,
        method: "PATCH",
        body: car,
      }),
      invalidatesTags: ["Cars"],
    }),
    deleteCar: builder.mutation({
      query: (id: number) => ({
        url: `/car/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useDeleteCarMutation } =
  extendedApiSlice;
