import { ADD_BUCKET, EDIT_BUCKET, DELETE_BUCKET } from "../actionTypes";

const initialState = {
  buckets: [],
};

const bucketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUCKET:
      return {
        ...state,
        buckets: [
          ...state.buckets,
          { id: state.buckets.length + 1, name: action.payload.name },
        ],
      };
    case EDIT_BUCKET:
      return {
        ...state,
        buckets: state.buckets.map((bucket) =>
          bucket.id === action.payload.id
            ? { ...bucket, name: action.payload.name }
            : bucket
        ),
      };
    case DELETE_BUCKET:
      return {
        ...state,
        buckets: state.buckets.filter(
          (bucket) => bucket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default bucketReducer;
