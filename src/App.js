import React from 'react';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>SWAPI Character Info</h1>
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;

