import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div className="character">
      <li>{props.character.name}</li>
      <li>Height: {props.character.height}m</li>
      <li>Eye Color: {props.character.eye_color}</li>
      <li>Birth Year: {props.character.birth_year}</li>
    </div>
  );
};

export default Character;
