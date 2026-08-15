import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function Spinner() {
  const stylesStates = figmaTailwing.states;

  return (
    <section className={stylesStates.loadingCard}>
      <div className={stylesStates.loadingContent}>
        <img className={stylesStates.loadingIcon} src={figmaAssets.loading} alt="" />
        <p>Loading...</p>
      </div>
    </section>
  );
}

export default Spinner;
