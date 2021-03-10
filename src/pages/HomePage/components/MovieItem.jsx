import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

MovieItem.propTypes = {
  movie: PropTypes.object,
};

MovieItem.defaultProps = {
  movie: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  media: {
    width: "100%",
    height: 300,
  },
  movieName: {
    fontSize: "20px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  cardContent: {
    padding: "5px 7px 0px",
  },
}));

export default function MovieItem({ movie }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.hinhAnh}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.movieName}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {movie.tenPhim}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="secondary">
          Mua vé
        </Button>
      </CardActions>
    </Card>
  );
}
