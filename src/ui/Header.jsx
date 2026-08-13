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
            alt=""
          />
          Units
          <img
            className={figmaTailwing.controls.unitsChevron}
            src={figmaAssets.dropdown}
            alt=""
          />
        </button>

        {isUnitOpen && (
          <div
            className={`${figmaTailwing.controls.menu} absolute right-0 top-[calc(100%+10px)]`}
          >
            <button className={figmaTailwing.controls.switchButton} type="button">
              Switch to Imperial
            </button>

            <fieldset className={figmaTailwing.controls.menuGroup}>
              <legend className={figmaTailwing.controls.menuLabel}>Temperature</legend>

              <div className={figmaTailwing.controls.menuOptions}>
                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="temperature"
                    value="celsius"
                    defaultChecked
                  />
                  <span>Celsius (°C)</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>

                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="temperature"
                    value="fahrenheit"
                  />
                  <span>Fahrenheit (°F)</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>
              </div>
            </fieldset>
            <div className={figmaTailwing.controls.menuDivider} aria-hidden="true" />

            <fieldset className={figmaTailwing.controls.menuGroup}>
              <legend className={figmaTailwing.controls.menuLabel}>Wind speed</legend>

              <div className={figmaTailwing.controls.menuOptions}>
                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="windSpeed"
                    value="km/h"
                    defaultChecked
                  />
                  <span>km/h</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>

                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="windSpeed"
                    value="mph"
                  />
                  <span>mph</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>
              </div>
            </fieldset>
            <div className={figmaTailwing.controls.menuDivider} aria-hidden="true" />

            <fieldset className={figmaTailwing.controls.menuGroup}>
              <legend className={figmaTailwing.controls.menuLabel}>Precipitation</legend>

              <div className={figmaTailwing.controls.menuOptions}>
                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="precipitation"
                    value="mm"
                    defaultChecked
                  />
                  <span>Millimeters (mm)</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>

                <label className={figmaTailwing.controls.menuItem}>
                  <input
                    className={figmaTailwing.controls.radio}
                    type="radio"
                    name="precipitation"
                    value="inch"
                  />
                  <span>Inches (in)</span>
                  <img
                    className={figmaTailwing.controls.checkmark}
                    src={figmaAssets.checkmark}
                    alt=""
                  />
                </label>
              </div>
            </fieldset>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
