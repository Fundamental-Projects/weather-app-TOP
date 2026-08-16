import { useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    const normalizedInput = inputValue.trim();

    if (!normalizedInput) return;

    onSearch(normalizedInput);

    setInputValue("");
  }
  return (
    <form onSubmit={handleSubmit} className={figmaTailwing.search.form}>
      <label className={figmaTailwing.search.fieldWrapper}>
        <img className={figmaTailwing.search.icon} src={figmaAssets.search} alt="" />
        <input
          type="text"
          placeholder="Search for a place..."
          aria-label="Search for a place"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
