import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Title from "./Title";
import PostsList from "./PostsList";
import Body from "./Body";

const StyledDiv = styled.div`
  width: 100%;
`;

const Layout = () => {
  return (
    <StyledDiv>
      <Grid container>
        <Grid container item direction="column" xs={12} sm={5} md={3}>
          <Title title={"Reddit Posts"} />
          <PostsList />
        </Grid>
        <Grid container item xs={12} sm={7} md={9}>
          <Body />
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

export default Layout;
