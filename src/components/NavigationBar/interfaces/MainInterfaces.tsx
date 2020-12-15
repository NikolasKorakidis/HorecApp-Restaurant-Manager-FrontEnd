import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 500,
    marginBottom: "5%",
  },
  media: {
    height: 180,
  },
});

interface Props {
  image: string;
  title: string;
  path: string;
  disc: string;
}

export default function MediaCard(props: Props) {
  const { image, title, path, disc } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {disc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
