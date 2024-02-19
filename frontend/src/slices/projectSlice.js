import { apiSlice } from "./apiSlice";

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/api/projects",
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Projects"],
    }),
    // getProjectDetails: builder.query({
    //   query: (projectId) => ({
    //     url: `/api/projects/${projectId}`,
    //   }),
    //   keepUnusedDataFor: 5,
    // }),
    createProject: builder.mutation({
      query: (newProject) => ({
        url: "/api/projects/create",
        method: "POST",
        body: newProject,
      }),
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation({
      query: (updatedProject) => ({
        url: `/api/projects/${updatedProject.projectId}`,
        method: "POST",
        body: updatedProject,
      }),
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/api/projects/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,

  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApiSlice;
