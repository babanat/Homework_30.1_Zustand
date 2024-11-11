import React, { useState } from 'react';
import Character from './Character';
import useCharacterStore from '../store/useCharacterStore';
import './CharacterList.css';

const CharacterList = () => {
  const [characterId, setCharacterId] = useState(''); 
  const characters = useCharacterStore((state) => state.characters);
  const fetchCharacter = useCharacterStore((state) => state.fetchCharacter);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      setCharacterId(value);
    }
  };

  const handleFetchCharacter = () => {
    fetchCharacter(characterId);
    setCharacterId(''); 
  };

  return (
    <div className="character-list-container">
      <input
        type="text"
        value={characterId}
        onChange={handleInputChange}
        placeholder="Enter character ID"
      />
      <button onClick={handleFetchCharacter}>Get Info</button>
      <div className="character-container">
        {characters.map((char, index) => (
          <Character key={index} {...char} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;

