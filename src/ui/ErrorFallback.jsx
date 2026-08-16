import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function ErrorFallback({ onRetry, isFetching }) {
  const stylesStates = figmaTailwing.states;

  return (
    <section className={stylesStates.errorLayout} aria-labelledby="api-error-title">
      <img className={stylesStates.errorIcon} src={figmaAssets.error} alt="" />
      <h1 id="api-error-title" className={stylesStates.errorTitle}>
        Something went wrong
      </h1>
      <p className={stylesStates.errorMessage}>
        We couldn’t connect to the server (API error). Please try again in a few moments.
      </p>
      <button
        className={stylesStates.retryButton}
        onClick={onRetry}
        disabled={isFetching}
        type="button"
      >
        <img className={figmaTailwing.asset.uiIcon} src={figmaAssets.retry} alt="" />
        Retry
      </button>
    </section>
  );
}

export default ErrorFallback;
