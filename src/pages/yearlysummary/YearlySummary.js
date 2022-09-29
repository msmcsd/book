import React, { useEffect } from "react";

export default function YearlySummary({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, [setSelectedLink, link]);
  return <div>Yearly Summary</div>;
}
