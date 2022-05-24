import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard';
import { fetchCharacter } from '../../services/fetchData';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterData = async () => {
      const resp = await fetchCharacter(id);
      setCharacter(resp);
      setLoading(false);
    };
    fetchCharacterData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <CharacterCard {...{ character }} />}
    </div>
  );
}
