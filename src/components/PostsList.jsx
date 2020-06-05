import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import { loadRedditPosts } from "../utils";
import { isEmpty } from "lodash";

const PostsGrid = styled(Grid)`
  min-width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const StyledDiv = styled.div`
  display: flex !important;
  justify-content: center !important;
`;

const PostsList = () => {
  const { posts, isLoading, lastPostId } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (isEmpty(posts) && !isLoading) loadRedditPosts(dispatch, { limit: 50 });
  const latestPost = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (latestPost.current) latestPost.current.disconnect();

      latestPost.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadRedditPosts(dispatch, { limit: 50, after: lastPostId });
        }
      });

      if (node) latestPost.current.observe(node);
    },
    [isLoading, dispatch, lastPostId]
  );

  return (
    <>
      <PostsGrid item xs>
        {posts.map((post, i) => {
          if (posts.length === i + 1) {
            return (
              <div key={post.data.id} ref={lastElementRef}>
                <PostItem post={post} />
              </div>
            );
          }
          return <PostItem key={post.data.id} post={post} />;
        })}
        {isLoading && (
          <StyledDiv>
            <CircularProgress />
          </StyledDiv>
        )}
      </PostsGrid>
    </>
  );
};

export default PostsList;
