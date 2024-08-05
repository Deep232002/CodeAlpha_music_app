import React, { useState } from 'react';
import axios from 'axios';
import apiClient from "../../spotify";

const Search = ({ setLibrary }) => {
  const [query, setQuery] = useState('');

  const searchMusic = async () => {
    apiClient.get(query).then(response=>{setLibrary(response.data.tracks.items)})
   
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMusic}>Search</button>
    </div>
  );
};

export default Search;
