import React from 'react';
import './Character.css';

const CharacterCard = ({ name, height, mass, gender }) => (
  <div className="character-card">
    <h2>{name}</h2>
    <p>Height: {height} cm</p>
    <p>Mass: {mass} kg</p>
    <p>Gender: {gender}</p>
  </div>
);

export default CharacterCard;
