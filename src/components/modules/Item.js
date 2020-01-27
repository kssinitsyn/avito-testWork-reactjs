import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 250
  },
  media: {
    height: 140
  }
});

export default function Item(props) {
  const classes = useStyles();

  return (
    <Card
      key={props.props.id}
      id={props.props.id}
      className={classes.card}
      onClick={e => {
        const id = e.currentTarget.getAttribute("id");
        localStorage.setItem("id", id);
        window.open(`/item/${id}`, "_blank");
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.props.previewImage}
          title={props.props.title}
        />
        <CardContent>
          <Typography gutterBottom color="primary" variant="h6" component="h2">
            {props.props.title}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            component="p"
            noWrap={false}
          >
            {props.props.address}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {props.props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
