import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

MySkeleton.propTypes = {
  length: PropTypes.number,
};

MySkeleton.defaultProps = {
  length: 8,
};

function MySkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid margin="8px" item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={300} />
              <Skeleton height={40} />
              <Skeleton height={40} width="25%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MySkeleton;
