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
} from "../redux/reducers/postsReducer";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { getDate } from "../utils";

const ActionGrid = styled(Grid)`
  padding-left: 16px !important;
  padding-right: 16px !important;
`;

const DismissButton = styled(Button)`
  flex-grow: 1 !important;
`;

const StyledListItemText = styled(ListItemText)`
  & > span {
    color: ${({ color }) => color} !important;
  }
`;

const PostItem = (props) => {
  const { post, setMobileOpen } = props;
  const dispatch = useDispatch();

  const {
    id,
    title,
    author,
    thumbnail,
    num_comments,
    created_utc,
    clicked,
  } = post.data;

  return (
    <Fragment key={id}>
      <ListItem
        button
        onClick={() => {
          dispatch(markAsRead(id));
          dispatch(seePostDetails(post));
          setMobileOpen(false);
        }}
        alignItems={"flex-start"}
      >
        <ListItemAvatar>
          <Avatar
            alt={id}
            src={thumbnail}
            onClick={(e) => {
              e.stopPropagation();
              window.open(thumbnail);
            }}
          />
        </ListItemAvatar>
        <StyledListItemText
          color={clicked ? "rgba(0,0,0,.3)" : "#000"}
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
