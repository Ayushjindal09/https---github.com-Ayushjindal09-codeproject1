import { ADD_BUCKET, EDIT_BUCKET, DELETE_BUCKET } from "../actionTypes";
import { v4 as uuidv4 } from "uuid";

export const fetchBuckets = () => {
  const id = uuidv4();
  return {
    type: fetchBuckets,
    payload: { id },
  };
};

export const createBucket = () => {
  const id = uuidv4();
  return {
    type: createBucket,
    payload: { id },
  };
};

export const addBucket = (name) => {
  return {
    type: ADD_BUCKET,
    payload: { name },
  };
};

export const editBucket = (id, name) => {
  return {
    type: EDIT_BUCKET,
    payload: { id, name },
  };
};

export const deleteBucket = (id) => {
  return {
    type: DELETE_BUCKET,
    payload: { id },
  };
};
