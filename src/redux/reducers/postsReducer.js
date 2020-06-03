import { createSlice } from "@reduxjs/toolkit";

const findPost = (state, id) =>
  state.posts.find((post) => {
    return post.data.id === id;
  }).data;

const filterPosts = (state, id) =>
  state.posts.filter((post) => {
    return post.data.id !== id;
  });

const posts = createSlice({
  name: "redditPosts",
  initialState: { isErrored: false, isLoading: false, posts: [] },
  reducers: {
    loadPosts: (state) => {
      return { ...state, isLoading: true };
    },
    savePosts: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, ...payload],
      };
    },
    dismissAllPosts: (state) => {
      return {
        ...state,
        posts: [],
      };
    },
    dismissPost: (state, { payload }) => {
      const posts = filterPosts(state, payload);
      return {
        ...state,
        posts,
      };
    },
    markAsRead: (state, { payload }) => {
      const post = findPost(state, payload);
      post.clicked = true;
    },
  },
});

export const {
  reducer: postsReducer,
  actions: { loadPosts, savePosts, dismissAllPosts, dismissPost, markAsRead },
} = posts;
