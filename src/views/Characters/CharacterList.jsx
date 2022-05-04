import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard';
import { fetchCharacters } from '../../services/fetchData';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchDataCall = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    };
    fetchDataCall();
  }, []);

  return (
    <div>
      <h2>CharacterList</h2>
      {loading && <p>Loading...</p>}
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <h3>{character.name}</h3>
        </Link>
      ))}
    </div>
  );
}
