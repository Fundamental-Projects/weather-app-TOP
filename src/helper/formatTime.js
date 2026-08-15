function formatHour(time) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,
  }).format(new Date(time));
}

function formatWeekday(date, format = "short") {
  return new Intl.DateTimeFormat("en-US", {
    weekday: format,
    timeZone: "UTC",
  }).format(new Date(date));
}

function formatFullDate(dateTime) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateTime));
}

export { formatHour, formatWeekday, formatFullDate };
