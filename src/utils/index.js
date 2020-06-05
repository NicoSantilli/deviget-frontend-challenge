import moment from "moment";
import { axiosInstance } from "../axios";
import { isNil } from "lodash";
import { loadPosts, savePosts } from "../redux/reducers/postsReducer";

export const getDate = (created_utc) => {
  return moment.unix(created_utc).fromNow();
};

export const parseHtml = (content = "") =>
  content.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const buildQueryParams = (params) => {
  if (isNil(params)) return "";

  return `?${Object.keys(params)
    .filter((value) => params[value])
    .map((key) => `${key}=${params[key] || ""}`)
    .join("&")}`;
};

export const loadRedditPosts = (dispatch, params) => {
  dispatch(loadPosts());
  axiosInstance.get(`top.json${buildQueryParams(params)}`).then(({ data }) => {
    dispatch(savePosts(data.data));
  });
};
