import React from "react";
import styled from "styled-components";
import {
  CardHeader,
  Card,
  CardMedia,
  CardActions,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { getDate } from "../utils";
import CommentIcon from "@material-ui/icons/ChatBubble";
import ScoreIcon from "@material-ui/icons/TrendingUp";
import { isEmpty } from "lodash";

const StyledCard = styled(Card)`
  border-radius: 0px !important;
`;

const StyledImg = styled.img`
  max-width: 25% !important;
`;

const StyledLink = styled.a`
  font-weight: bold !important;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none !important;
`;

const StyledCardMedia = styled(CardMedia)`
  display: flex !important;
  justify-content: center !important;
`;

const StyledTypography = styled(Typography)`
  display: flex !important;
  align-items: center !important;
  color: rgba(0, 0, 0, 0.54) !important;

  & > svg {
    margin-right: 5px !important;
  }
`;

const Media = ({ hint, url }) => {
  switch (hint) {
    case "image":
      return <StyledImg src={url} />;
    default:
      return null;
  }
};

const PostDetails = () => {
  const { post } = useSelector((state) => state);

  const {
    title,
    author,
    created_utc,
    post_hint,
    url,
    num_comments,
    subreddit_name_prefixed,
    upvote_ratio,
    score,
  } = post;

  return (
    !isEmpty(post) && (
      <StyledCard>
        <CardHeader
          title={title}
          subheader={
            <>
              <StyledLink href={`reddit.com/${subreddit_name_prefixed}`}>
                {subreddit_name_prefixed}
              </StyledLink>{" "}
              • Posted by <strong>u/{author}</strong> {getDate(created_utc)}{" "}
            </>
          }
        />
        <StyledCardMedia>
          <Media hint={post_hint} url={url} />
        </StyledCardMedia>
        <CardActions>
          <StyledTypography>
            <CommentIcon fontSize={"small"} />
            {`${num_comments} comments`}
          </StyledTypography>
          <StyledTypography
            style={{
              flexGrow: "1",
            }}
          >
            <ScoreIcon fontSize={"small"} />
            {`${score} points`}
          </StyledTypography>
          <StyledTypography>
            {`${Math.floor(upvote_ratio * 100)}% upvoted`}
          </StyledTypography>
        </CardActions>
      </StyledCard>
    )
  );
};

export default PostDetails;
