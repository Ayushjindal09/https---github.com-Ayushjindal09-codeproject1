import React from "react";
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Card = ({ card, onDelete, onEdit }) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {card.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.link}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="edit" onClick={() => onEdit(card)}>
          <Edit />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(card)}>
          <Delete />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
