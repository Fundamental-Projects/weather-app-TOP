import { useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function UnitToggle({ buttonName = "" }) {
  const [isUnitOpen, setIsUnitOpen] = useState(false);
  const stylesControls = figmaTailwing.controls; // Kısaltma için

  function handleClick() {
    setIsUnitOpen((isUnitOpen) => !isUnitOpen);
  }
  return (
    <div className="relative">
      <button onClick={handleClick} className={stylesControls.unitsButton} type="button">
        <img className={stylesControls.unitsIcon} src={figmaAssets.units} alt="" />
        <span className={stylesControls.unitsLabel}>{buttonName}</span>
        <img className={stylesControls.unitsChevron} src={figmaAssets.dropdown} alt="" />
      </button>

      {isUnitOpen && (
        <div className={`${stylesControls.menu} absolute right-0 top-[calc(100%+10px)]`}>
          <button className={stylesControls.switchButton} type="button">
            Switch to Imperial
          </button>

          <fieldset className={stylesControls.menuGroup}>
            <legend className={stylesControls.menuLabel}>Temperature</legend>

            <div className={stylesControls.menuOptions}>
              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="temperature"
                  value="celsius"
                  defaultChecked
                />
                <span>Celsius (°C)</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>

              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="temperature"
                  value="fahrenheit"
                />
                <span>Fahrenheit (°F)</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>
            </div>
          </fieldset>
          <div className={stylesControls.menuDivider} aria-hidden="true" />

          <fieldset className={stylesControls.menuGroup}>
            <legend className={stylesControls.menuLabel}>Wind speed</legend>

            <div className={stylesControls.menuOptions}>
              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="windSpeed"
                  value="km/h"
                  defaultChecked
                />
                <span>km/h</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>

              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="windSpeed"
                  value="mph"
                />
                <span>mph</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>
            </div>
          </fieldset>
          <div className={stylesControls.menuDivider} aria-hidden="true" />

          <fieldset className={stylesControls.menuGroup}>
            <legend className={stylesControls.menuLabel}>Precipitation</legend>

            <div className={stylesControls.menuOptions}>
              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="precipitation"
                  value="mm"
                  defaultChecked
                />
                <span>Millimeters (mm)</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>

              <label className={stylesControls.menuItem}>
                <input
                  className={stylesControls.radio}
                  type="radio"
                  name="precipitation"
                  value="inch"
                />
                <span>Inches (in)</span>
                <img
                  className={stylesControls.checkmark}
                  src={figmaAssets.checkmark}
                  alt=""
                />
              </label>
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default UnitToggle;
