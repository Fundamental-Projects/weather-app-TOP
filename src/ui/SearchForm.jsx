import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function SearchForm() {
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
