const IpMap = ({ latitude, longitude, city, country }) => {
  const lat = Number(latitude);
  const lng = Number(longitude);

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || (lat === 0 && lng === 0)) {
    return null;
  }

  const d = 0.04;
  const bbox = encodeURIComponent(`${lng - d},${lat - d},${lng + d},${lat + d}`);
  const marker = encodeURIComponent(`${lat},${lng}`);
  const location = [city, country].filter(Boolean).join(", ");

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <iframe
        title={`Approximate map location of this IP address${location ? ` (${location})` : ""}`}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`}
        className="h-72 w-full"
        loading="lazy"
      />
    </div>
  );
};

export default IpMap;
