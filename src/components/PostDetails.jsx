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
import { getDate, parseHtml } from "../utils";
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

const StyledVideo = styled.video`
  max-width: 25% !important;
`;

const Media = ({ post }) => {
  const { post_hint, url, secure_media, media_embed } = post.data;
  switch (post_hint) {
    case "image":
      return <StyledImg src={url} />;
    case "hosted:video":
    case "rich:video":
      const fallbackUrl = secure_media?.reddit_video?.fallback_url;
      const mediaEmbedContent = parseHtml(media_embed?.content);
      return fallbackUrl ? (
        <StyledVideo controls autoPlay loop>
          <source src={fallbackUrl} type="video/mp4" />
        </StyledVideo>
      ) : (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: mediaEmbedContent }}
        ></div>
      );
    default:
      return (
        <Typography>
          <a href={url} target={"_blank"} rel={"noopener noreferrer"}>
            {url}
          </a>
        </Typography>
      );
  }
};

const PostDetails = () => {
  const { post } = useSelector((state) => state);

  const {
    title,
    author,
    created_utc,
    num_comments,
    subreddit_name_prefixed,
    upvote_ratio,
    score,
  } = post.data || {};

  return (
    !isEmpty(post) && (
      <StyledCard>
        <CardHeader
          title={title}
          subheader={
            <>
              <StyledLink
                href={`https://reddit.com/${subreddit_name_prefixed}`}
                target={"_blank"}
              >
                {subreddit_name_prefixed}
              </StyledLink>{" "}
              • Posted by <strong>u/{author}</strong> {getDate(created_utc)}{" "}
            </>
          }
        />
        <StyledCardMedia>
          <Media post={post} />
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
