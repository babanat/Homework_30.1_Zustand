import React from 'react';
import useCharacterStore from '../store/useCharacterStore';
import './Footer.css';

const Footer = () => {
  const clearCharacters = useCharacterStore((state) => state.clearCharacters);

  return (
    <footer className="footer">
      <button onClick={clearCharacters}>Clear</button>
    </footer>
  );
};

export default Footer;
