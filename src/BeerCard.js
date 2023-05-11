import React, { useState } from "react";

function BeerCard(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };
  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };
  return (
    <li style={{ listStyle: "none", display: "flex", flex: "wrap" }}>
      <img
        src={props.image_url}
        style={{
          height: "300px",
          width: "100px",
          padding: "15px",
          margin: "75px 15px",
          backgroundColor: "#ffffff",
        }}
        alt="craft beers"
      ></img>
      <button
        style={{
          height: "30px",
          marginTop: "230px",
        }}
        onClick={handleLikeClick}
      >
        Like {likes}
      </button>
      <button
        style={{
          height: "30px",
          marginTop: "230px",
        }}
        onClick={handleDislikeClick}
      >
        Dislike {dislikes}
      </button>
      <div
        style={{
          padding: "15px",
          margin: "15px",
          textAlign: "center",
          flex: "50%",
          backgroundColor: "#282c34",
          opacity: "0.6",
        }}
      >
        <h3>{props.name}</h3>
        <h4>{props.first_brewed}</h4>
        <h4>{props.tagline}</h4>
        <p>
          <span>{props.abv}</span>
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default BeerCard;
