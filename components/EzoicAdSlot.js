const EzoicAdSlot = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: [
        "ezstandalone.cmd.push(function () {",
        "    ezstandalone.showAds({});",
        "});",
      ].join("\n"),
    }}
  />
);

export default EzoicAdSlot;