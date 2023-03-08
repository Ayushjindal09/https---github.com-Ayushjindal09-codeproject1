import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    margin: "0 auto",
    paddingTop: "1rem",
  },
});

const Bucket = ({
  bucket,
  cards,
  onDeleteBucket,
  onEditBucket,
  onDeleteCard,
}) => {
  const classes = useStyles();

  const handleDeleteCard = (card) => {
    onDeleteCard(card, bucket);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Bucket Name"
        defaultValue={bucket.name}
        InputProps={{ readOnly: true }}
        fullWidth
        variant="outlined"
      />
      <List>
        {cards.map((card) => (
          <ListItem
            key={card._id}
            button
            component={Link}
            to={`/card/${card._id}`}
          >
            <ListItemText primary={card.name} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="edit"
                onClick={() => onEditBucket(bucket)}
              >
                <Edit />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteCard(card)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <IconButton aria-label="delete" onClick={() => onDeleteBucket(bucket)}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default Bucket;
