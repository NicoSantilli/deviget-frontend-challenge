import React from "react";
import { Grid, Button } from "@material-ui/core";
import styled from "styled-components";
import DismissIcon from "@material-ui/icons/DeleteSweep";

const StyledGrid = styled(Grid)`
  padding: 20px 20px 0 20px;
  flew-grow: 1;
`;

const ActionBar = () => (
  <Grid item>
    <Grid container direction="row" alignItems="baseline">
      <StyledGrid item>
        <Button startIcon={<DismissIcon />} />
      </StyledGrid>
      <StyledGrid item>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DismissIcon />}
        >
          Dismiss all posts
        </Button>
      </StyledGrid>
    </Grid>
  </Grid>
);

export default ActionBar;
