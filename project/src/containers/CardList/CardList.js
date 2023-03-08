import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CardItem from "../../components/Card/Card";
import { deleteCard } from "../../store/actions/cardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    margin: "0 auto",
    paddingTop: "1rem",
  },
}));

const CardList = ({ cards, deleteCard }) => {
  const classes = useStyles();

  const handleDelete = (id) => {
    deleteCard(id);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <CardItem card={card} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.card.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => dispatch(deleteCard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
