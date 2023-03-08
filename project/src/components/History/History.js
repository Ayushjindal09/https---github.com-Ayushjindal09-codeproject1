import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    margin: "0 auto",
    paddingTop: "1rem",
  },
});

const History = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {history.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={item.time} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default History;
