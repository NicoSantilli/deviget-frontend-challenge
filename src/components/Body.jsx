import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import PostDetails from "./PostDetails";

const BodyGrid = styled(Grid)`
  padding: 50px !important;
  min-width: 100%;
  min-height: 100vh;
`;

const Body = () => {
  return (
    <BodyGrid item>
      <PostDetails />
    </BodyGrid>
  );
};

export default Body;
