import React, { useState } from "react";

export default function BeerCard(props) {
  console.log("Beer Card:", props.beer);
  const { beer } = props;
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        width: "300px",
        margin: "20px auto",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "5px 5px, 5px",
      }}
    >
      <h3>{beer.name}</h3>
      <p>
        ABV: {beer.abv} | IBU: {beer.ibu}
      </p>
      <p>{beer.description}</p>
      {!like ? (
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          Like
        </button>
      ) : (
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          Unlike
        </button>
      )}
    </div>
  );
}
