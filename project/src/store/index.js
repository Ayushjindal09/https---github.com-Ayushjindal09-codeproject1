import { combineReducers } from "redux";
import bucketReducer from "./reducer/bucketReducer";
import cardReducer from "./reducer/cardReducer";

const rootReducer = combineReducers({
  buckets: bucketReducer,
  cards: cardReducer,
});

export default rootReducer;
