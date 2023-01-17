import React, { useState, useEffect } from 'react';

function PersonCard() {
   
      const [characters, setCharacters] = useState([]);
      const [selectedOption, setSelectedOption] = useState();
      const [selectedCharacter, setSelectedCharacter] = useState();
    
      useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
      }, []);
      
      useEffect(() => {
        if(selectedOption){
          fetch(`https://rickandmortyapi.com/api/character/${selectedOption}`)
          .then(res => res.json())
          .then(data => setSelectedCharacter(data))
        }
      }, [selectedOption]);
    
      return (
        <div>
          <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
            {characters.map(character => (
              <option key={character.id} value={character.id}>
                {character.name}
              </option>
            ))}
          </select>
          {selectedCharacter && (
            <div>
              <h2>{selectedCharacter.name}</h2>
              <p>{selectedCharacter.species}</p>
              <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
            </div>
          )}
        </div>
      );
    }
    
    

export default PersonCard;
