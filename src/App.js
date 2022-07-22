import "./App.css";
import React, { useEffect, useState } from "react";
import BeerCard from "./components/BeerCard";

function App() {
  const [beers, setBeers] = useState([]);
  //you can add more things here!
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, []);
  //console.log("tell me what the heck I'm doing", this.state.beers)

  if (beers.length < 1) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="App">
      {beers.map((beer) => {
        return (
          <BeerCard beer={beer}  />
        );
      })}
    </div>
  );
}

export default App;
