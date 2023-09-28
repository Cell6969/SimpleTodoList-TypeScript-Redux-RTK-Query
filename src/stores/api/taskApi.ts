import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../../model/Task";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ["Task"],  // tambahkan tag untuk auto fetch jika ada perubahan
    endpoints: (builder) => ({
        // Query untuk mendapatkan sedangkan Mutation untuk merubah
        getTasks: builder.query<Task[], void>({ //untuk get
            query() {
                return {
                    url: "/tasks",
                    method: "GET",
                }
            },
            providesTags: ["Task"] // tambahkan tag untuk auto fetch jika ada perubahan
        }),
        createTask: builder.mutation<Task, Task>({ //untuk post
            query(task) {
                return {
                    url: "/tasks",
                    method: "POST",
                    body: task
                }
            },
            invalidatesTags: ["Task"]
        }),
        getTask: builder.query<Task, number>({ //untuk get spesifik 1 data
            query(id) {
                return {
                    url: "/tasks/" + id,
                    method: "GET",
                }
            },
        }),

        updateTask: builder.mutation<Task, any>({ //untuk patch data 
            query({ id, data }) {
                return {
                    url: "/tasks/" + id,
                    method: "PATCH",
                    body: data
                }
            },
            invalidatesTags: ["Task"]
        }),

        deleteTask: builder.mutation<any, number>({
            query(id) {
                return {
                    url: "/tasks/" + id,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ["Task"]
        })
    })
});

export const {
    useLazyGetTasksQuery,
    useCreateTaskMutation,
    useLazyGetTaskQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApi;

export default taskApi;