import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const BodyGrid = styled(Grid)`
  min-width: 100%;
  min-height: 100vh;
`;

const Body = () => <BodyGrid item>{"I'm the body"}</BodyGrid>;

export default Body;
