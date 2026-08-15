import { useState } from "react";
import figmaTailwing, { figmaAssets } from "../styles/figmaStlyes/figmaTailwing";

function UnitToggle({ units, dispatch }) {
  const [isUnitOpen, setIsUnitOpen] = useState(false);

  const stylesControls = figmaTailwing.controls; // Kısaltma için

  const isMetric =
    units.temperature === "celsius" &&
    units.windSpeed === "km/h" &&
    units.precipitation === "mm";

  const nextSystem = isMetric ? "imperial" : "metric";

  function handleClick() {
    setIsUnitOpen((isUnitOpen) => !isUnitOpen);
  }
  return (
    <div className="relative">
      <button onClick={handleClick} className={stylesControls.unitsButton} type="button">
        <img className={stylesControls.unitsIcon} src={figmaAssets.units} alt="" />
        <span className={stylesControls.unitsLabel}>Units</span>
        <img className={stylesControls.unitsChevron} src={figmaAssets.dropdown} alt="" />
      </button>

      {isUnitOpen && (
        <div className={`${stylesControls.menu} absolute right-0 top-[calc(100%+10px)]`}>
          <button
            className={stylesControls.switchButton}
            onClick={() => dispatch({ type: "unitSystemChanged", payload: nextSystem })}
            type="button"
          >
            Switch to {nextSystem}
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
                  checked={units.temperature === "celsius"}
                  onChange={(e) =>
                    dispatch({ type: "temperatureChanged", payload: e.target.value })
                  }
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
                  checked={units.temperature === "fahrenheit"}
                  onChange={(e) =>
                    dispatch({ type: "temperatureChanged", payload: e.target.value })
                  }
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
                  checked={units.windSpeed === "km/h"}
                  onChange={(e) =>
                    dispatch({ type: "windSpeedUnitChanged", payload: e.target.value })
                  }
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
                  checked={units.windSpeed === "mph"}
                  onChange={(e) =>
                    dispatch({ type: "windSpeedUnitChanged", payload: e.target.value })
                  }
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
                  checked={units.precipitation === "mm"}
                  onChange={(e) =>
                    dispatch({ type: "precipitationChanged", payload: e.target.value })
                  }
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
                  checked={units.precipitation === "inch"}
                  onChange={(e) =>
                    dispatch({ type: "precipitationChanged", payload: e.target.value })
                  }
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
