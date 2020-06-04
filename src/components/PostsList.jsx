import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostsGrid = styled(Grid)`
  min-width: 100%;
  height: 100%;
`;

const PostsList = () => {
  const { posts } = useSelector((state) => state);

  return (
    <PostsGrid item xs>
      {posts.map(({ data }) => (
        <PostItem key={data.id} post={data} />
      ))}
    </PostsGrid>
  );
};

export default PostsList;
