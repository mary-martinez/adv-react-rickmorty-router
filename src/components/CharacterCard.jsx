import React from 'react'

export default function CharacterCard({ character }) {
  return (
    <>
      <h2>{character.name}</h2>
      <img alt={`${character.name} image`} src={character.image} />
      <p>From: {character.origin.name}</p>
      <p>Status: {character.status}</p>
      {character.episode.length === 1 ? <p>In 1 episode.</p> : <p>In {character.episode.length} episodes.</p>}
    </>
  )
}
