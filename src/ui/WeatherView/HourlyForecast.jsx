import figmaTailwing, { figmaAssets } from "../../styles/figmaStlyes/figmaTailwing";
import { formatHour, formatWeekday } from "../../helper/formatTime";
import { convertTemperature } from "../../features/units/conversationUnits";
import { useState } from "react";

function HourlyForecast({ weatherTypes, hourlyData, units, dailyData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const activeDate = selectedDate ?? dailyData[0]?.time;
  const selectedDayHours = hourlyData.filter((hour) => hour.time.startsWith(activeDate));
  const visibleHours = selectedDayHours.slice(15, 23);

  const stylesHourly = figmaTailwing.hourly;

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <section className={stylesHourly.panel}>
      <div className={stylesHourly.header}>
        <h2 className={stylesHourly.title}>Hourly forecast</h2>
        <button
          onClick={handleClick}
          className={figmaTailwing.controls.dayButton}
          type="button"
        >
          <span>Tuesday</span>
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
                <button className={stylesHourly.dayMenuOption} type="button">
                  {formatWeekday(day.time, "long")}
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
              <img
                className={stylesHourly.icon}
                src={figmaAssets[weatherTypes[hour.weatherCode]]}
                alt={weatherTypes[hour.weatherCode]}
              />
              <time dateTime={hour.time} className={stylesHourly.time}>
                {formatHour(hour.time)}
              </time>
              <span className={stylesHourly.temperature}>
                {convertTemperature(hour.temperature, units.temperature).toFixed(0)}°
              </span>
            </li>
          );
        })}
      </ul>
      <div className={stylesHourly.scrollbar} aria-hidden="true" />
    </section>
  );
}

export default HourlyForecast;
