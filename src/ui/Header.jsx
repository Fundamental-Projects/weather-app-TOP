import { useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function Header() {
  const [isUnitOpen, setIsUnitOpen] = useState(false);

  function handleClick() {
    setIsUnitOpen((isUnitOpen) => !isUnitOpen);
  }
  return (
    <header className={figmaTailwing.layout.header}>
      <img
        className={figmaTailwing.layout.logo}
        src={figmaAssets.logo}
        alt="Weather Now"
      />
      <div className="relative">
        <button
          onClick={handleClick}
          className={figmaTailwing.controls.unitsButton}
          type="button"
        >
          <img
            className={figmaTailwing.controls.unitsIcon}
            src={figmaAssets.units}
            alt="chevron"
          />
          Units
          <img
            className={figmaTailwing.controls.chevron}
            src={figmaAssets.dropdown}
            alt="units"
          />
        </button>

        {isUnitOpen && (
          <div
            className={`${figmaTailwing.controls.menu} absolute right-0 top-[calc(100%+8px)]`}
          >
            <button type="button">Switch to Imperial</button>

            <fieldset>
              <legend className={figmaTailwing.controls.menuLabel}>Temperature</legend>

              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="temperature" value="celsius" defaultChecked />
                Celsius
              </label>

              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="temperature" value="fahrenheit" />
                Fahrenheit
              </label>
            </fieldset>

            <fieldset>
              <legend className={figmaTailwing.controls.menuLabel}>Wind speed</legend>
              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="windSpeed" value="km/h" defaultChecked />
                km/h
              </label>

              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="windSpeed" value="mph" />
                mph
              </label>
            </fieldset>
            <fieldset>
              <legend className={figmaTailwing.controls.menuLabel}>Precipitation</legend>
              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="precipitation" value="mm" defaultChecked />
                mm
              </label>

              <label className={figmaTailwing.controls.menuItem}>
                <input type="radio" name="precipitation" value="inch" />
                inch
              </label>
            </fieldset>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
