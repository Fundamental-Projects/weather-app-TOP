import { useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function SearchForm({ searchTerm, onSearch }) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className={figmaTailwing.search.form}>
      <label className={figmaTailwing.search.fieldWrapper}>
        <img className={figmaTailwing.search.icon} src={figmaAssets.search} alt="" />
        <input
          type="text"
          placeholder="Search for a place..."
          aria-label="Search for a place"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className={figmaTailwing.search.input}
        />
      </label>
      <button className={figmaTailwing.search.button} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
