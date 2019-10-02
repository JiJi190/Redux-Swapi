import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div className="character">
      <li>{props.character.name}</li>
    </div>
  );
};

export default Character;
