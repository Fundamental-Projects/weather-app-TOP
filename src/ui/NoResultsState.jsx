import figmaTailwing from "../styles/figmaStlyes/figmaTailwing";

function NoResultsState() {
  return (
    <p className={figmaTailwing.states.noResults} role="status">
      No search result found!
    </p>
  );
}

export default NoResultsState;
