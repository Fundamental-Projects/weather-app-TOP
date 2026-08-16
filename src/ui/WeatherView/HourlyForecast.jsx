import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatHour, formatWeekday } from "../../helper/formatTime";
import { convertTemperature } from "../../features/units/conversationUnits";
import { useState } from "react";
import useDropdown from "../../hooks/useDropdown";

function HourlyForecast({ weatherTypes, hourlyData, units, dailyData, isPending }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const { isOpen, toggle, close, containerRef, triggerRef } = useDropdown();

  const activeDate = isPending ? null : (selectedDate ?? dailyData[0]?.time);

  const selectedDayHours = isPending
    ? []
    : hourlyData.filter((hour) => hour.time.startsWith(activeDate));

  const visibleHours = isPending
    ? Array.from({ length: 8 })
    : selectedDayHours.slice(15, 23);

  const stylesHourly = figmaTailwing.hourly;

  function handleDateClick(day) {
    setSelectedDate(day);
    close();
  }

  return (
    <section className={stylesHourly.panel}>
      <div ref={containerRef} className={stylesHourly.header}>
        <h2 className={stylesHourly.title}>Hourly forecast</h2>
        <button
          aria-expanded={isOpen}
          aria-controls={isOpen ? "days-dropdown" : undefined}
          ref={triggerRef}
          onClick={toggle}
          className={figmaTailwing.controls.dayButton}
          type="button"
        >
          <span>{isPending ? "-" : formatWeekday(activeDate, "long")}</span>
          <img
            className={figmaTailwing.controls.chevron}
            src={figmaAssets.dropdown}
            alt=""
          />
        </button>
        {isOpen && (
          <ul id="days-dropdown" className={stylesHourly.dayMenu}>
            {dailyData.map((day) => (
              <li key={day.time}>
                <button
                  onClick={() => handleDateClick(day.time)}
                  className={stylesHourly.dayMenuOption}
                  type="button"
                >
                  {isPending ? [] : formatWeekday(day.time, "long")}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className={stylesHourly.rows}>
        {visibleHours.map((hour, index) => {
          return (
            <li key={index} className={stylesHourly.row}>
              {!isPending && (
                <>
                  <img
                    className={stylesHourly.icon}
                    src={figmaAssets[weatherTypes[hour.weatherCode]]}
                    alt={weatherTypes[hour.weatherCode]}
                  />
                  <time dateTime={hour.time} className={stylesHourly.time}>
                    {isPending ? "—" : formatHour(hour.time)}
                  </time>
                  <span className={stylesHourly.temperature}>
                    {isPending
                      ? ""
                      : `${convertTemperature(hour.temperature, units.temperature).toFixed(0)}°`}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <div className={stylesHourly.scrollbar} aria-hidden="true" />
    </section>
  );
}

export default HourlyForecast;
