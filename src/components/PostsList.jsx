import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Grid,
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { dismissPost } from "../redux/reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const PostsGrid = styled(Grid)`
  min-width: 100%;
  height: 100%;
`;

const ActionGrid = styled(Grid)`
  padding-left: 16px !important;
  padding-right: 16px !important;
`;

const DismissButton = styled(Button)`
  flex-grow: 1 !important;
`;
const getDate = (created_utc) => {
  return moment.unix(created_utc).fromNow();
};

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  return (
    <PostsGrid item xs>
      {posts.map(({ data }) => {
        const {
          id,
          title,
          author,
          thumbnail,
          num_comments,
          created_utc,
        } = data;
        return (
          <Fragment key={id}>
            <ListItem button alignItems={"flex-start"}>
              <ListItemAvatar>
                <Avatar alt={id} src={thumbnail} />
              </ListItemAvatar>
              <ListItemText
                primary={title}
                secondary={
                  <>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      color={"textSecondary"}
                    >
                      Posted by <strong>u/{author}</strong>{" "}
                      {getDate(created_utc)}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ActionGrid container justify={"center"} alignItems={"center"}>
              <Grid item xs>
                <DismissButton
                  startIcon={<DeleteIcon />}
                  onClick={() => dispatch(dismissPost(id))}
                >
                  Dismiss
                </DismissButton>
              </Grid>
              <Grid item xs>
                <Typography
                  component={"span"}
                  variant={"body2"}
                  color={"primary"}
                >
                  {`${num_comments} comments`}
                </Typography>
              </Grid>
            </ActionGrid>
            <Divider />
          </Fragment>
        );
      })}
    </PostsGrid>
  );
};

export default PostsList;
