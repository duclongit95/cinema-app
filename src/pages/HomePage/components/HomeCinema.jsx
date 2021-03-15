import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import CategoryGroupCinema from "./CategoryGroupCinema";
import GroupCinema from "./GroupCinema";

HomeCinema.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: 444,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(500)]: {
      display: "none",
    },
  },
}));

function HomeCinema(props) {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root} elevation={3}>
        <CategoryGroupCinema />
        <GroupCinema />
      </Paper>
    </Container>
  );
}

export default HomeCinema;
