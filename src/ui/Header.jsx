import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";
import UnitToggle from "./UnitToggle";

function Header() {
  return (
    <header className={figmaTailwing.layout.header}>
      <img
        className={figmaTailwing.layout.logo}
        src={figmaAssets.logo}
        alt="Weather Now"
      />
      <UnitToggle buttonName="Units" />
    </header>
  );
}

export default Header;
