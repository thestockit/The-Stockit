const cleanRows = (rows) =>
  rows.filter(
    (row) => row.value !== null && row.value !== undefined && row.value !== ""
  );

export const countryValue = (data) => {
  const flag = data.flag?.emoji || "";
  return data.country ? `${data.country}${flag ? ` ${flag}` : ""}` : "";
};

export const timeAtOffset = (utcOffset) => {
  const match = /^([+-])(\d{2}):(\d{2})$/.exec(utcOffset || "");
  if (!match) return "";
  const sign = match[1] === "-" ? -1 : 1;
  const totalMinutes = sign * (parseInt(match[2], 10) * 60 + parseInt(match[3], 10));
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcMs + totalMinutes * 60000)
    .toISOString()
    .slice(0, 16)
    .replace("T", " ");
};

export const buildIpSections = (data = {}) => {
  const geolocation = {
    id: "geolocation",
    label: "Geolocation",
    rows: cleanRows([
      { label: "Continent", value: data.continent, copyable: true },
      { label: "Country", value: countryValue(data), copyable: true },
      { label: "Country Code", value: data.country_code, copyable: true },
      { label: "Region", value: data.region, copyable: true },
      { label: "City", value: data.city, copyable: true },
      { label: "Postal Code", value: data.postal, copyable: true },
      { label: "Latitude", value: data.latitude, copyable: true },
      { label: "Longitude", value: data.longitude, copyable: true },
      { label: "Capital", value: data.capital, copyable: true },
      {
        label: "Calling Code",
        value: data.calling_code ? `+${data.calling_code}` : "",
        copyable: true,
      },
      {
        label: "Borders",
        value: data.borders ? String(data.borders).replace(/\|/g, ",") : "",
        copyable: true,
      },
      {
        label: "EU Member",
        value: typeof data.is_eu === "boolean" ? (data.is_eu ? "Yes" : "No") : "",
      },
    ]),
    flagImg: data.flag?.img || "",
  };

  const connection = {
    id: "connection",
    label: "Connection",
    rows: cleanRows([
      { label: "ISP", value: data.connection?.isp, copyable: true },
      { label: "Organization", value: data.connection?.org, copyable: true },
      {
        label: "ASN",
        value: data.connection?.asn ? `AS${data.connection.asn}` : "",
        copyable: true,
      },
      { label: "Domain", value: data.connection?.domain, copyable: true },
      { label: "IP Type", value: data.type, copyable: true },
    ]),
  };

  const timezone = {
    id: "timezone",
    label: "Timezone",
    rows: cleanRows([
      { label: "Timezone", value: data.timezone?.id, copyable: true },
      { label: "Abbreviation", value: data.timezone?.abbr, copyable: true },
      { label: "UTC Offset", value: data.timezone?.utc, copyable: true },
      { label: "Offset (seconds)", value: data.timezone?.offset, copyable: true },
      { label: "Current Local Time", value: timeAtOffset(data.timezone?.utc) },
      {
        label: "DST Active",
        value:
          typeof data.timezone?.is_dst === "boolean"
            ? data.timezone.is_dst
              ? "Yes"
              : "No"
            : "",
      },
    ]),
  };

  return [geolocation, connection, timezone].filter((section) => section.rows.length > 0);
};

export const highlightStats = (data = {}) =>
  [
    { label: "Country", value: countryValue(data) },
    { label: "City", value: data.city },
    { label: "Region", value: data.region },
    { label: "ISP", value: data.connection?.isp },
    { label: "Timezone", value: data.timezone?.id },
  ].filter((stat) => stat.value);
