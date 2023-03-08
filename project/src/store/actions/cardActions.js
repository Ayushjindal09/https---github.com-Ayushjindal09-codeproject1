import * as actionTypes from "../actionTypes";

export const addCard = (card, bucketId) => {
  return {
    type: actionTypes.ADD_CARD,
    payload: {
      card,
      bucketId,
    },
  };
};

export const editCard = (card, bucketId) => {
  return {
    type: actionTypes.EDIT_CARD,
    payload: {
      card,
      bucketId,
    },
  };
};

export const deleteCard = (id, bucketId) => {
  return {
    type: actionTypes.DELETE_CARD,
    payload: {
      id,
      bucketId,
    },
  };
};

export const deleteCards = (ids, bucketId) => {
  return {
    type: actionTypes.DELETE_CARD,
    payload: {
      ids,
      bucketId,
    },
  };
};

// export const playCard = (card, time) => {
//   return {
//     type: actionTypes.PLAY_CARD,
//     payload: {
//       card,
//       time,
//     },
//   };
// };
