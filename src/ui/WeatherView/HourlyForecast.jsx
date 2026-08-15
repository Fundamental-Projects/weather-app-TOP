import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatHour, formatWeekday } from "../../helper/formatTime";
import { convertTemperature } from "../../features/units/conversationUnits";
import { useState } from "react";

function HourlyForecast({ weatherTypes, hourlyData, units, dailyData, query }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const activeDate = query.isPending ? null : (selectedDate ?? dailyData[0]?.time);

  const selectedDayHours = query.isPending
    ? []
    : hourlyData.filter((hour) => hour.time.startsWith(activeDate));

  const visibleHours = query.isPending
    ? Array.from({ length: 8 })
    : selectedDayHours.slice(15, 23);

  const stylesHourly = figmaTailwing.hourly;

  function handleOpenClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleDateClick(day) {
    setSelectedDate(day);
  }

  return (
    <section className={stylesHourly.panel}>
      <div className={stylesHourly.header}>
        <h2 className={stylesHourly.title}>Hourly forecast</h2>
        <button
          onClick={handleOpenClick}
          className={figmaTailwing.controls.dayButton}
          type="button"
        >
          <span>{query.isPending ? "-" : formatWeekday(activeDate, "long")}</span>
          <img
            className={figmaTailwing.controls.chevron}
            src={figmaAssets.dropdown}
            alt=""
          />
        </button>
        {isOpen && (
          <ul className={stylesHourly.dayMenu}>
            {dailyData.map((day) => (
              <li key={day.time}>
                <button
                  onClick={() => handleDateClick(day.time)}
                  className={stylesHourly.dayMenuOption}
                  type="button"
                >
                  {query.isPending ? [] : formatWeekday(day.time, "long")}
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
              {!query.isPending && (
                <>
                  <img
                    className={stylesHourly.icon}
                    src={figmaAssets[weatherTypes[hour.weatherCode]]}
                    alt={weatherTypes[hour.weatherCode]}
                  />
                  <time dateTime={hour.time} className={stylesHourly.time}>
                    {query.isPending ? "—" : formatWeekday(activeDate, "long")}
                  </time>
                  <span className={stylesHourly.temperature}>
                    {query.isPending
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
