import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createBucket, deleteBucket } from "../../store/actions/bucketActions";
import Bucket from "../BucketList/BucketList";
import BucketForm from "../BucketList/BucketList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2rem",
  },
  header: {
    marginBottom: "1rem",
  },
}));

const BucketList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const buckets = useSelector((state) => state.bucket.buckets);
  // bucketActions.js

  //   const CreateBucket = (bucketName) => {
  //     return {
  //       type: CREATE_BUCKET,
  //       payload: {
  //         bucketName,
  //       },
  //     };
  //   };

  const handleCreateBucket = (name) => {
    dispatch(createBucket(name));
  };

  const handleDeleteBucket = (id) => {
    dispatch(deleteBucket(id));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Buckets
      </Typography>
      <BucketForm onSubmit={handleCreateBucket} />
      {buckets.map((bucket) => (
        <Bucket key={bucket.id} bucket={bucket} onDelete={handleDeleteBucket} />
      ))}
    </div>
  );
};

export default BucketList;
