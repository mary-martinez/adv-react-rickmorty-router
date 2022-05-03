import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CharacterCard from '../../components/CharacterCard';
import { fetchCharacters } from '../../services/fetchData';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchDataCall = async() => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    }
    fetchDataCall();
  }, [])

  return (
    <div>
      <h2>CharacterList</h2>
      {loading && <p>Loading...</p>}
      {characters.map((character) => (
        <CharacterCard key={character.id} {...{character}} />
      ))}
    </div>
  )
}
