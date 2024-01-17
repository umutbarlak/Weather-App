export function convertTimeStamp(timeStamp, timezone) {
  const convertTimeZone = timezone / 3600;
  const date = new Date(timeStamp * 1000);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimeZone >= 0 ? "-" : "+"}${Math.abs(
      convertTimeZone
    )}`,
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

export function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  return regionNames.of(country);
}
