import { useState } from "react";

const movies = [
  "Naufrago",
  "Titanic",
  "Madagascar",
  "Aliados",
  "Persuasion",
  "Mujercitas",
].sort((a, b) => a.localeCompare(b));

export const SearchList = () => {
  const [search, setSearch] = useState("");
  
  return (
    <form>
      <h1>Search List</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {movies
          .filter((movie) => movie.toLowerCase().includes(search))
          .map((movie) => (
            <li style={{listStyleType: "none"}}>{movie}</li>
          ))}
      </ul>
      <p>{}</p>
    </form>
  );
};
