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
import {
  dismissPost,
  seePostDetails,
  markAsRead,
  dismissPostFromDetails,
} from "../redux/reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { getDate } from "../utils";

const ActionGrid = styled(Grid)`
  padding-left: 16px !important;
  padding-right: 16px !important;
`;

const DismissButton = styled(Button)`
  flex-grow: 1 !important;
`;

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const { post: postShown } = useSelector((state) => state);

  const { id, title, author, thumbnail, num_comments, created_utc } = post;

  return (
    <Fragment key={id}>
      <ListItem
        button
        onClick={() => {
          dispatch(markAsRead(post.id));
          dispatch(seePostDetails(post));
        }}
        alignItems={"flex-start"}
      >
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
                Posted by <strong>u/{author}</strong> {getDate(created_utc)}{" "}
              </Typography>
            </>
          }
        />
      </ListItem>
      <ActionGrid container justify={"center"} alignItems={"center"}>
        <Grid item xs>
          <DismissButton
            startIcon={<DeleteIcon />}
            onClick={() => {
              dispatch(dismissPost(id));
              if (id === postShown.id) {
                dispatch(dismissPostFromDetails());
              }
            }}
          >
            Dismiss
          </DismissButton>
        </Grid>
        <Grid item xs>
          <Typography
            component={"span"}
            variant={"body2"}
            color={"textSecondary"}
          >
            {`${num_comments} comments`}
          </Typography>
        </Grid>
      </ActionGrid>
      <Divider />
    </Fragment>
  );
};

export default PostItem;
