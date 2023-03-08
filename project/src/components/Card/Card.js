// import React from "react";
// import {
//   Card as MuiCard,
//   CardActions,
//   CardContent,
//   Typography,
//   IconButton,
// } from "@material-ui/core";
// import { Delete, Edit } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   card: {
//     marginBottom: "1rem",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   actions: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
// });

// const Card = ({ card, onDelete, onEdit }) => {
//   const classes = useStyles();

//   return (
//     <MuiCard className={classes.card}>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {card.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {card.link}
//         </Typography>
//       </CardContent>
//       <CardActions className={classes.actions}>
//         <IconButton aria-label="edit" onClick={() => onEdit(card)}>
//           <Edit />
//         </IconButton>
//         <IconButton aria-label="delete" onClick={() => onDelete(card)}>
//           <Delete />
//         </IconButton>
//       </CardActions>
//     </MuiCard>
//   );
// };

// export default Card;

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [bucketName, setBucketName] = useState("");

  const createCard = async () => {
    try {
      // Set up Trello API credentials
      const API_KEY = "your_api_key";
      const API_TOKEN = "your_api_token";

      // Get the board ID for the bucket
      const boardUrl = `https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`;
      const response = await axios.get(boardUrl);
      const boards = response.data;

      const bucketBoard = boards.find((board) => board.name === bucketName);
      if (!bucketBoard) {
        console.log("Bucket not found.");
        return;
      }

      // Create the card under the bucket
      const cardUrl = `https://api.trello.com/1/cards?key=${API_KEY}&token=${API_TOKEN}`;
      const payload = {
        name: cardTitle,
        desc: cardDescription,
        idList: bucketBoard.id,
      };
      await axios.post(cardUrl, payload);
      console.log("Card created successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={cardTitle}
        onChange={(event) => setCardTitle(event.target.value)}
      />
      <input
        type="text"
        value={cardDescription}
        onChange={(event) => setCardDescription(event.target.value)}
      />
      <input
        type="text"
        value={bucketName}
        onChange={(event) => setBucketName(event.target.value)}
      />
      <button onClick={createCard}>Create Card</button>
    </div>
  );
}

export default App;
