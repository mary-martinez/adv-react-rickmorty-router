import React from 'react'
import { useState } from 'react';

export default function CharacterList() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <h2>CharacterList</h2>
      {loading && <p>Loading...</p>}
    </div>
  )
}
