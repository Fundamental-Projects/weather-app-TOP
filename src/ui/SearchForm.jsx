import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";
import { fetchLocationSuggestions } from "../services/fetchData";

function SearchForm({ onSearch, onLocationSelect }) {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const normalizedSearch = debouncedSearch.trim();
  const suggestionsQuery = useQuery({
    queryKey: ["suggestions", normalizedSearch],
    queryFn: () => fetchLocationSuggestions(normalizedSearch),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
    enabled: normalizedSearch.length >= 2,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(inputValue.trim());
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  const suggestions = suggestionsQuery.data ?? [];
  const visibleSuggestions = suggestions.slice(0, 4);
  const normalizedInput = inputValue.trim();

  const shouldShowSuggestions =
    isSearchOpen &&
    normalizedInput.length >= 2 &&
    normalizedInput === normalizedSearch &&
    visibleSuggestions.length > 0;

  function handleInputChange(event) {
    setIsSearchOpen(true);
    setInputValue(event.target.value);
  }

  function handleSuggestionClick(location) {
    setInputValue(`${location.city}, ${location.country}`);
    setIsSearchOpen(false);
    onLocationSelect(location);
  }

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
          onChange={handleInputChange}
          className={figmaTailwing.search.input}
        />
      </label>
      <button className={figmaTailwing.search.button} type="submit">
        Search
      </button>

      {shouldShowSuggestions && (
        <ul
          id="location-suggestions"
          className={figmaTailwing.search.dropdown}
          role="listbox"
        >
          {visibleSuggestions.map((location) => (
            <li
              id={`location-option-${location.id}`}
              key={location.id}
              className={figmaTailwing.search.option}
              role="option"
              onClick={() => handleSuggestionClick(location)}
              // aria-selected={index === activeIndex}
            >
              {location.city}, {location.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
