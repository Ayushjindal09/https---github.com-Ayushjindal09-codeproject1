import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBuckets } from "./store/actions/bucketActions";
import BucketList from "./containers/BucketList/BucketList";
import CardList from "./containers/CardList/CardList";
import Modal from "./components/Modal/Modal";
// import History from "./components/History";
import History from "./components/History/History";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuckets());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/bucket/:id" component={BucketList} />
          <Route exact path="/bucket/:id" component={CardList} />
        </Routes>
        <Modal />
        <History />
      </div>
    </Router>
  );
}

export default App;
