import { apiSlice } from "./apiSlice";

export const documentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: (id) => `/api/documents/all/${id}`,
      providesTags: ["Documents"],
    }),
    getDocument: builder.query({
      query: (documentId) => ({
        url: `/api/documents/${documentId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getRoomTokenForDocument: builder.query({
      query: (room) => ({
        url: "api/liveblocks",
        body: room,
        method: "POST",
      }),
    }),

    createDocument: builder.mutation({
      query: (newDocument) => ({
        url: "/api/documents",
        method: "POST",
        body: newDocument,
      }),
      invalidatesTags: ["Documents"],
    }),
    updateDocument: builder.mutation({
      query: ({ data, id }) => ({
        url: `/api/documents/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Documents"],
    }),
    deleteDocument: builder.mutation({
      query: (documentId) => ({
        url: `/api/documents/${documentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Documents"],
    }),
    getPreviousVersion: builder.query({
      query: (documentId) => ({
        url: `/api/documents/previous/${documentId}`,
      }),
    }),
  }),
});

export const {
  useGetDocumentsQuery,
  useGetDocumentQuery,

  useCreateDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteDocumentMutation,
  useGetPreviousVersionQuery,
} = documentsApiSlice;
