import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";
import { fetchLocationSuggestions } from "../services/fetchData";

function SearchForm({ onSearch, onNoResults, onSearchChange }) {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const formRef = useRef(null);

  const normalizedSearch = debouncedSearch.trim();
  const suggestionsQuery = useQuery({
    queryKey: ["suggestions", normalizedSearch],
    queryFn: () => fetchLocationSuggestions(normalizedSearch),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
    enabled: isSearchOpen && normalizedSearch.length >= 2,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(inputValue.trim());
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  useEffect(() => {
    if (!isSearchOpen) return;

    function handlePointerDown(event) {
      const clickedOutside =
        formRef.current && !formRef.current.contains(event.target);

      if (clickedOutside) {
        setIsSearchOpen(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isSearchOpen]);

  const suggestions = suggestionsQuery.data ?? [];
  const visibleSuggestions = suggestions.slice(0, 4);
  const normalizedInput = inputValue.trim();
  const isQueryCurrent = normalizedInput === normalizedSearch;

  const shouldShowProgress =
    isSearchOpen &&
    normalizedInput.length >= 2 &&
    (!isQueryCurrent || suggestionsQuery.isFetching);

  const shouldShowSuggestions =
    isSearchOpen &&
    normalizedInput.length >= 2 &&
    isQueryCurrent &&
    !suggestionsQuery.isFetching &&
    visibleSuggestions.length > 0;

  function handleInputChange(event) {
    setIsSearchOpen(true);
    setInputValue(event.target.value);
    setSelectedSuggestion(null);
    setActiveIndex(-1);
    onSearchChange();
  }

  function handleSuggestionClick(location) {
    setInputValue(`${location.city}, ${location.country}`);
    setIsSearchOpen(false);
    setSelectedSuggestion(location);
    setActiveIndex(-1);
  }

  function handleInputKeyDown(event) {
    const hasCurrentSuggestions =
      isQueryCurrent && visibleSuggestions.length > 0;

    if (event.key === "Escape" && isSearchOpen) {
      event.preventDefault();
      setIsSearchOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!hasCurrentSuggestions) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsSearchOpen(true);
      setActiveIndex((previousIndex) =>
        previousIndex < visibleSuggestions.length - 1 ? previousIndex + 1 : 0,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsSearchOpen(true);
      setActiveIndex((previousIndex) =>
        previousIndex > 0 ? previousIndex - 1 : visibleSuggestions.length - 1,
      );
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      handleSuggestionClick(visibleSuggestions[activeIndex]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedSuggestion) {
      onSearchChange();
      onSearch(selectedSuggestion);

      setInputValue("");
      setSelectedSuggestion(null);
      setIsSearchOpen(false);

      return;
    }

    if (!isQueryCurrent || suggestionsQuery.isFetching) return;

    if (suggestionsQuery.isSuccess && suggestions.length === 0) {
      onNoResults();
      return;
    }

  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={figmaTailwing.search.form}>
      <label className={figmaTailwing.search.fieldWrapper}>
        <img className={figmaTailwing.search.icon} src={figmaAssets.search} alt="" />
        <input
          type="text"
          placeholder="Search for a place..."
          aria-label="Search for a place"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={shouldShowSuggestions}
          aria-controls={shouldShowSuggestions ? "location-suggestions" : undefined}
          aria-activedescendant={
            activeIndex >= 0
              ? `location-option-${visibleSuggestions[activeIndex]?.id}`
              : undefined
          }
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className={figmaTailwing.search.input}
        />
      </label>
      <button className={figmaTailwing.search.button} type="submit">
        Search
      </button>

      {shouldShowProgress && (
        <div className={figmaTailwing.search.progress} role="status" aria-live="polite">
          <img
            className={`${figmaTailwing.asset.uiIcon} animate-spin`}
            src={figmaAssets.loading}
            alt=""
          />
          <span>Search in progress</span>
        </div>
      )}

      {shouldShowSuggestions && (
        <ul
          id="location-suggestions"
          className={figmaTailwing.search.dropdown}
          role="listbox"
        >
          {visibleSuggestions.map((location, index) => (
            <li
              id={`location-option-${location.id}`}
              key={location.id}
              className={`${figmaTailwing.search.option} ${
                index === activeIndex ? figmaTailwing.search.optionActive : ""
              }`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSuggestionClick(location)}
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
