import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Request"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Request"],
    }),
    markAllCompleted: builder.mutation({
        query: () => ({
          url: "/todos/mark-all-completed",
          method: "POST",
        }),
        invalidatesTags: ["Request"],
      }),
      clearAllCompleted: builder.mutation({
        query: () => ({
          url: "/todos/clear-completed",
          method: "POST",
        }),
        invalidatesTags: ["Request"],
      }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Request"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useMarkAllCompletedMutation,
  useClearAllCompletedMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = extendedApiSlice;
