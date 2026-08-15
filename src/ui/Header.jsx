import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";
import UnitToggle from "./UnitToggle";

function Header({ children }) {
  const stylesLayout = figmaTailwing.layout; // Kısaltma için
  return (
    <header className={stylesLayout.header}>
      <img className={stylesLayout.logo} src={figmaAssets.logo} alt="Weather Now" />
      {children}
    </header>
  );
}

export default Header;
