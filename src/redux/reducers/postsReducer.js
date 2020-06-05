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
  initialState: {
    isErrored: false,
    isLoading: false,
    posts: [],
    post: {},
    lastPostId: "",
  },
  reducers: {
    loadPosts: (state) => {
      return { ...state, isLoading: true };
    },
    savePosts: (state, { payload }) => {
      const lastPostRetrieved = payload.children.slice(-1).pop();
      const lastPost =
        payload.before || lastPostRetrieved
          ? `${lastPostRetrieved.kind}_${lastPostRetrieved.data.id}`
          : "";

      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, ...payload.children],
        lastPostId: lastPost,
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
      const post = state.post.data;
      return {
        ...state,
        posts,
        post: payload === post?.id ? {} : state.post,
      };
    },
    markAsRead: (state, { payload }) => {
      const post = findPost(state, payload);
      post.clicked = true;
    },
    seePostDetails: (state, { payload }) => {
      return {
        ...state,
        post: payload,
      };
    },
  },
});

export const {
  reducer: postsReducer,
  actions: {
    loadPosts,
    savePosts,
    dismissAllPosts,
    dismissPost,
    markAsRead,
    seePostDetails,
  },
} = posts;
