import { ADD_CARD, EDIT_CARD, DELETE_CARD, MOVE_CARD } from "../actionTypes";

const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: state.cards.length + 1,
            name: action.payload.name,
            video: action.payload.video,
            bucketId: action.payload.bucketId,
          },
        ],
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? {
                ...card,
                name: action.payload.name,
                video: action.payload.video,
              }
            : card
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.id),
      };
    case MOVE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, bucketId: action.payload.bucketId }
            : card
        ),
      };
    default:
      return state;
  }
};

export default cardReducer;
