import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal as MuiModal, Paper, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: "80%",
    maxWidth: "800px",
    maxHeight: "80vh",
    overflow: "auto",
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const Modal = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <MuiModal open={open} onClose={onClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Close />
        </IconButton>
        {children}
      </Paper>
    </MuiModal>
  );
};

export default Modal;
