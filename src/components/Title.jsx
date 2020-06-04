import React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

const TitleGrid = styled(Grid)`
  padding: 20px 20px 0px 20px;
  text-align: center;
`;

const Title = ({ title }) => (
  <TitleGrid item>
    <Typography component={"span"} variant={"h5"}>
      {title}
    </Typography>
  </TitleGrid>
);

export default Title;
