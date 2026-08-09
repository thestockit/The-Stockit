import SpecList from "./SpecList";

const IpDetails = ({ sections = [] }) => {
  const rows = sections.flatMap((section) => section.rows);
  if (rows.length === 0) return null;

  return <SpecList rows={rows} />;
};

export default IpDetails;
